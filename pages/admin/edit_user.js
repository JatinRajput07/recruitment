import Layout from '../../components/Layout/Layout'
import Edit_User from '../../components/View/admin/User_Edit'


export default function Index() {
    return (
        <>
            <div id="wrapper">
                <Layout requireAuth={true}>
                    <Edit_User />
                </Layout>
            </div>

        </>
    )
}