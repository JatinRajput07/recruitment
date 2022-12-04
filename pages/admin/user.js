import Layout from '../../components/Layout/Layout'
import UserList from '../../components/View/admin/UserList.jsx'


export default function Index() {
    return (
        <>
            <div id="wrapper">
                <Layout requireAuth={true}>
                    <UserList />
                </Layout>
            </div>

        </>
    )
}