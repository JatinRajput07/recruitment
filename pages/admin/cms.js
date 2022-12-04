import Layout from '../../components/Layout/Layout'
import CMS from '../../components/View/admin/Cms'

// window.jQuery = require("jquery");
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