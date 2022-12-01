const db = require('../models')
const catchAsync = require('../utils/catchAsync')
const { success } = require('../helpers/helper')
const { Validator } = require('node-input-validator')
const AppError = require('../utils/appError')
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { promisify } = require('util')


/*
|----------------------------------------------------------------------------------------------------------------
|   Common Controllers
|----------------------------------------------------------------------------------------------------------------
*/

const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach(el => {
        if (allowedFields.includes(el)) newObj[el] = obj[el];
    });
    return newObj;
};



/*
|----------------------------------------------------------------------------------------------------------------
|   Auth Controllers
|----------------------------------------------------------------------------------------------------------------
*/
exports.protect = catchAsync(async (req, res, next) => {
    // 1) Getting token and check of it's there
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }
    else if (req.cookies.jwt) {
        token = req.cookies.jwt;
    }

    if (!token) {
        return next(
            new AppError('You are not logged in! Please log in to get access.', 401)
        );
    }

    // 2) Verification token
    const decoded = await promisify(JWT.verify)(token, process.env.JWT_SECRET);

    // 3) Check if user still exists
    const currentUser = await db.users.findOne({ where: { id: decoded.id } });
    if (!currentUser) {
        return next(
            new AppError(
                'The user belonging to this token does no longer exist.',
                401
            )
        );
    }

    // GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser;
    next();
});


/*
|----------------------------------------------------------------------------------------------------------------
|   User Controllers
|----------------------------------------------------------------------------------------------------------------
*/

exports.adminCreate = catchAsync(async (req, res, next) => {
    const v = new Validator(req.body, {
        full_name: 'required',
        family_name: 'required',
        citizenship: 'required',
        date_birth: 'required|date',
        zip_code: 'required',
        city: 'required',
        email: 'required|email',
        password: 'required|minLength:6|maxLength:12',
        image: 'required',
        phone: 'required',
        address: 'required',
    });

    var errorsResponse
    await v.check().then(function (matched) {
        if (!matched) {
            var valdErrors = v.errors;
            var respErrors = [];
            Object.keys(valdErrors).forEach(function (key) {
                if (valdErrors && valdErrors[key] && valdErrors[key].message) {
                    respErrors.push(valdErrors[key].message);
                }
            });
            errorsResponse = respErrors.join(', ');
        }
    });

    if (errorsResponse) {
        return next(new AppError(errorsResponse, 400));
    }

    const { email, role, password } = req.body
    const emailExist = await db.users.findOne({ where: { email: email }, raw: true })
    if (emailExist) {
        return next(new AppError('Email already exist', 400));
    }
    req.body.password = await bcrypt.hash(password, 12)
    let user = await db.users.create(req.body)
    const token = JWT.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
    user.token = token
    return success(res, 'account create succesfully', 201, user)
})


exports.login = catchAsync(async (req, res, next) => {
    const v = new Validator(req.body, {
        email: 'required|email',
        password: 'required|minLength:6|maxLength:12',
    });

    var errorsResponse
    await v.check().then(function (matched) {
        if (!matched) {
            var valdErrors = v.errors;
            var respErrors = [];
            Object.keys(valdErrors).forEach(function (key) {
                if (valdErrors && valdErrors[key] && valdErrors[key].message) {
                    respErrors.push(valdErrors[key].message);
                }
            });
            errorsResponse = respErrors.join(', ');
        }
    });

    if (errorsResponse) {
        return next(new AppError(errorsResponse, 400));
    }

    const { email, password } = req.body

    let user = await db.users.findOne({ where: { email: email }, raw: true })
    if (!user) {
        return next(new AppError('Incorrect Email', 400));
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (isMatch == false) {
        return next(new AppError('Incorrect Password', 400));
    }

    const token = JWT.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
    user.token = token
    return success(res, 'Login succesfully', 200, user)

})

exports.me = catchAsync(async (req, res, next) => {
    const user = await db.users.findOne({ where: { id: req.user.id } })
    return success(res, 'Profile get successfull', 200, user)
})

exports.update_profile = catchAsync(async (req, res, next) => {
    console.log(req.body, '=====?')
    const filteredBody = filterObj(req.body, 'password', 'phone', 'name', 'address');
    // if (req.file) filteredBody.image = req.file.filename;
    const data = await db.users.update(filteredBody, {
        where: {
            id: req.user.id
        }
    })

    const user = await db.users.findOne({ where: { id: req.user.id } })
    return success(res, 'Profile get successfull', 200, user)
})
