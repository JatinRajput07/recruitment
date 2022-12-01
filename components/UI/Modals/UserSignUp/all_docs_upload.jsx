

/* eslint-disable @next/next/no-img-element */
const All_Docs_Upload = ({ data, setData }) => {

   

    return (
        <>
            <div className="login_from">
                <form id="login_form" className="form" action="" method="post">
                    <div className="drop_img" >
                        <img src="images/drop.png" alt="" />
                        <input type="file" />
                    </div>
                    <div className="drop_2">
                        <a href="" className="drop_cancel1">  Upload Document</a>
                        <a href="" className="drop_cancel"> Cancel</a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default All_Docs_Upload