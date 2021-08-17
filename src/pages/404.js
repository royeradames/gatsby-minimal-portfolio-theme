/* libraries */
import * as React from "react"

/* components */
import Layout from "../components/Layout"

/* if page doesn't exist give users this content */
const NotFoundPage = () => (
  <Layout>
    <article>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </article>
  </Layout>
)

export default NotFoundPage
