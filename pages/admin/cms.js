import Layout from '../../components/Layout/Layout'
import CMS from '../../components/View/admin/Cms'


export default function Index() {
    return (
        <>
            <div id="wrapper">
                <Layout requireAuth={true}>
                    <CMS />
                </Layout>
            </div>

        </>
    )
}