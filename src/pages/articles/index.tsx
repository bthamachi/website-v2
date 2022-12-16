import { MDXProvider } from "@mdx-js/react";
import Layout from "../../components/Layout";

export default function Post(props) {
  return (
    <Layout>
      <MDXProvider>
        <main {...props} />
      </MDXProvider>
    </Layout>
  );
}
