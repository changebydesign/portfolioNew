import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/portfolio/PlasmicGlobalContextsProvider";
import { PlasmicCases } from "../components/plasmic/portfolio/PlasmicCases";
import { useRouter } from "next/router";

function Cases() {
  return (
    <GlobalContextsProvider>
      <PageParamsProvider__
        route={useRouter()?.pathname}
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <PlasmicCases />
      </PageParamsProvider__>
    </GlobalContextsProvider>
  );
}

export async function getStaticProps() {
  return {
    props: {}
  };
}

export default Cases;
