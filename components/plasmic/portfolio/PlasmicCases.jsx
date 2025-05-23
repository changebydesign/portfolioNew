/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 97MbGMxsXsF5gjCjjz3B5V
// Component: 9BqTlAle0a4m
import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Button from "../../Button"; // plasmic-import: jbgHgwnt8sB/component
import ButtonMain from "../../ButtonMain"; // plasmic-import: rtKQ4fFMEB/component
import { useScreenVariants as useScreenVariantsnuJkasGnoEh0 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nuJkasGnoEH0/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 97MbGMxsXsF5gjCjjz3B5V/projectcss
import sty from "./PlasmicCases.module.css"; // plasmic-import: 9BqTlAle0a4m/css
import LogoIcon from "./icons/PlasmicIcon__Logo"; // plasmic-import: eSVlDPyOQ9/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: kBIgGqlJ-jDO/icon
import PartnerSiemensIcon from "./icons/PlasmicIcon__PartnerSiemens"; // plasmic-import: nT6uc56Izp/icon
import PartnerAdidasIcon from "./icons/PlasmicIcon__PartnerAdidas"; // plasmic-import: ZgIgUnVnNo/icon
import PartnerContinentalIcon from "./icons/PlasmicIcon__PartnerContinental"; // plasmic-import: OSgC9vbcAk/icon
import PartnerBvgIcon from "./icons/PlasmicIcon__PartnerBvg"; // plasmic-import: uxM8e9cy11/icon
import PartnerHaconIcon from "./icons/PlasmicIcon__PartnerHacon"; // plasmic-import: IEXgbMey7C/icon
import PartnerSoviIcon from "./icons/PlasmicIcon__PartnerSovi"; // plasmic-import: 2MYlHVfrzG/icon
import PartnerConcordiaIcon from "./icons/PlasmicIcon__PartnerConcordia"; // plasmic-import: tJN0WF8tHX/icon
import PartnerMobielIcon from "./icons/PlasmicIcon__PartnerMobiel"; // plasmic-import: XCDc5nKRot/icon
import PartnerWabcoIcon from "./icons/PlasmicIcon__PartnerWabco"; // plasmic-import: 8wFd_LINtC/icon
import PartnerAuerswaldIcon from "./icons/PlasmicIcon__PartnerAuerswald"; // plasmic-import: _nskE4A0sG/icon
import PartnerStDupontIcon from "./icons/PlasmicIcon__PartnerStDupont"; // plasmic-import: qVETjt-7dD/icon
import PartnerGenoakademieIcon from "./icons/PlasmicIcon__PartnerGenoakademie"; // plasmic-import: K67i_mBp_5/icon
import PartnerGuidoMariaKretschmerIcon from "./icons/PlasmicIcon__PartnerGuidoMariaKretschmer"; // plasmic-import: yI4OzDHF1P/icon

createPlasmicElementProxy;

export const PlasmicCases__VariantProps = new Array();

export const PlasmicCases__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCases__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnuJkasGnoEh0()
  });
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicCases.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicCases.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicCases.pageMetadata.title}
        />

        <meta
          key="description"
          name="description"
          content={PlasmicCases.pageMetadata.description}
        />

        <meta
          key="og:description"
          property="og:description"
          content={PlasmicCases.pageMetadata.description}
        />

        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicCases.pageMetadata.description}
        />

        <meta
          key="og:image"
          property="og:image"
          content={PlasmicCases.pageMetadata.ogImageSrc}
        />

        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicCases.pageMetadata.ogImageSrc}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"home"}
          data-plasmic-override={overrides.home}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.home
          )}
        >
          <Stack__
            as={"section"}
            data-plasmic-name={"headerOld"}
            data-plasmic-override={overrides.headerOld}
            hasGap={true}
            className={classNames(projectcss.all, sty.headerOld)}
          >
            <LogoIcon
              data-plasmic-name={"logo"}
              data-plasmic-override={overrides.logo}
              className={classNames(projectcss.all, sty.logo)}
              role={"img"}
            />

            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly") ? (
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#FFFFFF" }}
                  >
                    {"Abdulaziz Coskun"}
                  </span>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#FFFFFF" }}
                  >
                    {"Abdulaziz Coskun"}
                  </span>
                </React.Fragment>
              )}
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            hasGap={true}
            className={classNames(projectcss.all, sty.header)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___4LzaA)}
            >
              <Icon4Icon
                data-plasmic-name={"logo2"}
                data-plasmic-override={overrides.logo2}
                className={classNames(projectcss.all, sty.logo2)}
                role={"img"}
              />

              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__nbNfQ)}
              >
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link___1COhw
                  )}
                  component={Link}
                  href={"https://www.plasmic.app/"}
                  platform={"nextjs"}
                >
                  {"Cases"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__ePx6F
                  )}
                  component={Link}
                  href={"https://www.plasmic.app/"}
                  platform={"nextjs"}
                >
                  {"About me"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__wxKrt
                  )}
                  component={Link}
                  href={""}
                  onClick={async event => {
                    const $steps = {};
                    $steps["goToMailtoHiAcoskunCom"] = true
                      ? (() => {
                          const actionArgs = {
                            destination: "mailto:hi@acoskun.com"
                          };
                          return (({ destination }) => {
                            if (
                              typeof destination === "string" &&
                              destination.startsWith("#")
                            ) {
                              document
                                .getElementById(destination.substr(1))
                                .scrollIntoView({ behavior: "smooth" });
                            } else {
                              __nextRouter?.push(destination);
                            }
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["goToMailtoHiAcoskunCom"] != null &&
                      typeof $steps["goToMailtoHiAcoskunCom"] === "object" &&
                      typeof $steps["goToMailtoHiAcoskunCom"].then ===
                        "function"
                    ) {
                      $steps["goToMailtoHiAcoskunCom"] = await $steps[
                        "goToMailtoHiAcoskunCom"
                      ];
                    }
                  }}
                  platform={"nextjs"}
                  title={"Write an email to Abdulaziz."}
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__fwuJz)}
                  >
                    {"Let's talk"}
                  </Button>
                </PlasmicLink__>
              </Stack__>
            </Stack__>
          </Stack__>
          <section
            data-plasmic-name={"hero"}
            data-plasmic-override={overrides.hero}
            className={classNames(projectcss.all, sty.hero)}
          >
            <h1
              data-plasmic-name={"heroTItle"}
              data-plasmic-override={overrides.heroTItle}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.heroTItle
              )}
            >
              {"These are my cases"}
            </h1>
            <p
              data-plasmic-name={"heroIntro"}
              data-plasmic-override={overrides.heroIntro}
              className={classNames(
                projectcss.all,
                projectcss.p,
                projectcss.__wab_text,
                sty.heroIntro
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "Seamlessly align both your customers' needs & your business objectives to deliver an enhanced experience.\n\n\u2014 App (iOS, android, web)\n\u2014 SaaS\n\u2014 Design System"
                : "Here you can find some cases studies of what we accomplished"}
            </p>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__rwjmy)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"40%"}
              loading={"lazy"}
              src={{
                src: "/plasmic/portfolio/images/dotsDecorationPng.png",
                fullWidth: 2275,
                fullHeight: 2275,
                aspectRatio: undefined
              }}
            />
          </section>
          <section
            data-plasmic-name={"yourPartner2"}
            data-plasmic-override={overrides.yourPartner2}
            className={classNames(projectcss.all, sty.yourPartner2)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"profile2"}
              data-plasmic-override={overrides.profile2}
              hasGap={true}
              className={classNames(projectcss.all, sty.profile2)}
            >
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__qSnkk)}
                displayHeight={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "420px"
                    : hasVariant(globalVariants, "screen", "tablet")
                    ? "auto"
                    : "auto"
                }
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "auto"
                    : hasVariant(globalVariants, "screen", "tablet")
                    ? "50%"
                    : "50%"
                }
                loading={"lazy"}
                src={{
                  src: "/plasmic/portfolio/images/profileYourCollaborativePartner.jpg",
                  fullWidth: 673,
                  fullHeight: 673,
                  aspectRatio: undefined
                }}
              />

              <Stack__
                as={"div"}
                data-plasmic-name={"aboutPartner2"}
                data-plasmic-override={overrides.aboutPartner2}
                hasGap={true}
                className={classNames(projectcss.all, sty.aboutPartner2)}
              >
                <h6
                  className={classNames(
                    projectcss.all,
                    projectcss.h6,
                    projectcss.__wab_text,
                    sty.h6__rRRsz
                  )}
                >
                  {"UI/UX + Strategy +  iOS, Android, Web"}
                </h6>
                <h3
                  data-plasmic-name={"titlePainpoints5"}
                  data-plasmic-override={overrides.titlePainpoints5}
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.titlePainpoints5
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Let's make a change by design"
                    : hasVariant(globalVariants, "screen", "tablet")
                    ? "Let's make a change by design"
                    : "NextGen Design System for a Global Mobility Platform \u2014 Siemens Mobility Software"}
                </h3>
                <Button
                  className={classNames("__wab_instance", sty.button___3L1Zy)}
                  link={`/design-system-siemens-mobility-software`}
                >
                  {"Check out case study"}
                </Button>
              </Stack__>
            </Stack__>
            <Stack__
              as={"div"}
              data-plasmic-name={"profile3"}
              data-plasmic-override={overrides.profile3}
              hasGap={true}
              className={classNames(projectcss.all, sty.profile3)}
            >
              <Stack__
                as={"div"}
                data-plasmic-name={"aboutPartner3"}
                data-plasmic-override={overrides.aboutPartner3}
                hasGap={true}
                className={classNames(projectcss.all, sty.aboutPartner3)}
              >
                <h6
                  className={classNames(
                    projectcss.all,
                    projectcss.h6,
                    projectcss.__wab_text,
                    sty.h6__qcnGf
                  )}
                >
                  {"Design System + Strategy +  iOS, Android, Web"}
                </h6>
                <h3
                  data-plasmic-name={"titlePainpoints6"}
                  data-plasmic-override={overrides.titlePainpoints6}
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.titlePainpoints6
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Let's make a change by design"
                    : hasVariant(globalVariants, "screen", "tablet")
                    ? "Let's make a change by design"
                    : "NextGen Design System for a Global Mobility Platform \u2014 Siemens Mobility Software"}
                </h3>
                <Button
                  className={classNames("__wab_instance", sty.button__cnbOt)}
                />
              </Stack__>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__m5Bi6)}
                displayHeight={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "420px"
                    : hasVariant(globalVariants, "screen", "tablet")
                    ? "auto"
                    : "auto"
                }
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "auto"
                    : hasVariant(globalVariants, "screen", "tablet")
                    ? "50%"
                    : "50%"
                }
                loading={"lazy"}
                src={{
                  src: "/plasmic/portfolio/images/profileYourCollaborativePartner.jpg",
                  fullWidth: 673,
                  fullHeight: 673,
                  aspectRatio: undefined
                }}
              />
            </Stack__>
          </section>
          <Stack__
            as={"div"}
            data-plasmic-name={"partnersTop"}
            data-plasmic-override={overrides.partnersTop}
            hasGap={true}
            className={classNames(projectcss.all, sty.partnersTop)}
          >
            <h6
              className={classNames(
                projectcss.all,
                projectcss.h6,
                projectcss.__wab_text,
                sty.h6__qocqQ
              )}
            >
              {"We made great things together"}
            </h6>
            <Stack__
              as={"div"}
              data-plasmic-name={"logos"}
              data-plasmic-override={overrides.logos}
              hasGap={true}
              className={classNames(projectcss.all, sty.logos)}
            >
              <PartnerSiemensIcon
                className={classNames(projectcss.all, sty.svg__am4As)}
                role={"img"}
              />

              <PartnerAdidasIcon
                className={classNames(projectcss.all, sty.svg__fVrh5)}
                role={"img"}
              />

              <PartnerContinentalIcon
                className={classNames(projectcss.all, sty.svg__i4FzA)}
                role={"img"}
              />

              <PartnerBvgIcon
                className={classNames(projectcss.all, sty.svg__b7ItE)}
                role={"img"}
              />

              <PartnerHaconIcon
                className={classNames(projectcss.all, sty.svg__iu4Sv)}
                role={"img"}
              />

              <PartnerSoviIcon
                className={classNames(projectcss.all, sty.svg__wEchb)}
                role={"img"}
              />

              <PartnerConcordiaIcon
                className={classNames(projectcss.all, sty.svg__bnSg4)}
                role={"img"}
              />

              <PartnerMobielIcon
                className={classNames(projectcss.all, sty.svg__mhaca)}
                role={"img"}
              />

              <PartnerWabcoIcon
                className={classNames(projectcss.all, sty.svg__j509)}
                role={"img"}
              />

              <PartnerAuerswaldIcon
                className={classNames(projectcss.all, sty.svg__fqU6)}
                role={"img"}
              />

              <PartnerStDupontIcon
                className={classNames(projectcss.all, sty.svg__rx0W)}
                role={"img"}
              />

              <PartnerGenoakademieIcon
                className={classNames(projectcss.all, sty.svg__hZrJg)}
                role={"img"}
              />

              <PartnerGuidoMariaKretschmerIcon
                className={classNames(projectcss.all, sty.svg__eElDd)}
                role={"img"}
              />

              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__eig65)}
                displayHeight={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "auto"
                    : "80px"
                }
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "111px"
                    : "181px"
                }
                loading={"lazy"}
                src={{
                  src: "/plasmic/portfolio/images/logoKastensLuisenhof.png",
                  fullWidth: 181,
                  fullHeight: 79,
                  aspectRatio: undefined
                }}
              />
            </Stack__>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"letsTalk"}
            data-plasmic-override={overrides.letsTalk}
            hasGap={true}
            className={classNames(projectcss.all, sty.letsTalk)}
          >
            <h6
              className={classNames(
                projectcss.all,
                projectcss.h6,
                projectcss.__wab_text,
                sty.h6__garq
              )}
            >
              {"Let's talk"}
            </h6>
            <h2
              data-plasmic-name={"letsTalkTitle"}
              data-plasmic-override={overrides.letsTalkTitle}
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.letsTalkTitle
              )}
            >
              {"Take your first step to next level"}
            </h2>
            <p
              data-plasmic-name={"introDesignSystem4"}
              data-plasmic-override={overrides.introDesignSystem4}
              className={classNames(
                projectcss.all,
                projectcss.p,
                projectcss.__wab_text,
                sty.introDesignSystem4
              )}
            >
              {
                "Ready to have a design that resonate with customers and drive meaningful results? Let's collaborate and explore how I can bring a fresh perspective to your app/saas."
              }
            </p>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__fbHtq
              )}
              component={Link}
              href={""}
              onClick={async event => {
                const $steps = {};
                $steps["goToMailtoHiAcoskunCom"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: "mailto:hi@acoskun.com"
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToMailtoHiAcoskunCom"] != null &&
                  typeof $steps["goToMailtoHiAcoskunCom"] === "object" &&
                  typeof $steps["goToMailtoHiAcoskunCom"].then === "function"
                ) {
                  $steps["goToMailtoHiAcoskunCom"] = await $steps[
                    "goToMailtoHiAcoskunCom"
                  ];
                }
              }}
              platform={"nextjs"}
            >
              <ButtonMain
                data-plasmic-name={"buttonMain"}
                data-plasmic-override={overrides.buttonMain}
                className={classNames("__wab_instance", sty.buttonMain)}
                dark={true}
              />
            </PlasmicLink__>
          </Stack__>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  home: [
    "home",
    "headerOld",
    "logo",
    "text",
    "header",
    "logo2",
    "hero",
    "heroTItle",
    "heroIntro",
    "yourPartner2",
    "profile2",
    "aboutPartner2",
    "titlePainpoints5",
    "profile3",
    "aboutPartner3",
    "titlePainpoints6",
    "partnersTop",
    "logos",
    "letsTalk",
    "letsTalkTitle",
    "introDesignSystem4",
    "buttonMain"
  ],

  headerOld: ["headerOld", "logo", "text"],
  logo: ["logo"],
  text: ["text"],
  header: ["header", "logo2"],
  logo2: ["logo2"],
  hero: ["hero", "heroTItle", "heroIntro"],
  heroTItle: ["heroTItle"],
  heroIntro: ["heroIntro"],
  yourPartner2: [
    "yourPartner2",
    "profile2",
    "aboutPartner2",
    "titlePainpoints5",
    "profile3",
    "aboutPartner3",
    "titlePainpoints6"
  ],

  profile2: ["profile2", "aboutPartner2", "titlePainpoints5"],
  aboutPartner2: ["aboutPartner2", "titlePainpoints5"],
  titlePainpoints5: ["titlePainpoints5"],
  profile3: ["profile3", "aboutPartner3", "titlePainpoints6"],
  aboutPartner3: ["aboutPartner3", "titlePainpoints6"],
  titlePainpoints6: ["titlePainpoints6"],
  partnersTop: ["partnersTop", "logos"],
  logos: ["logos"],
  letsTalk: ["letsTalk", "letsTalkTitle", "introDesignSystem4", "buttonMain"],
  letsTalkTitle: ["letsTalkTitle"],
  introDesignSystem4: ["introDesignSystem4"],
  buttonMain: ["buttonMain"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCases__ArgProps,
          internalVariantPropNames: PlasmicCases__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCases__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "home") {
    func.displayName = "PlasmicCases";
  } else {
    func.displayName = `PlasmicCases.${nodeName}`;
  }
  return func;
}

export const PlasmicCases = Object.assign(
  // Top-level PlasmicCases renders the root element
  makeNodeComponent("home"),
  {
    // Helper components rendering sub-elements
    headerOld: makeNodeComponent("headerOld"),
    logo: makeNodeComponent("logo"),
    text: makeNodeComponent("text"),
    header: makeNodeComponent("header"),
    logo2: makeNodeComponent("logo2"),
    hero: makeNodeComponent("hero"),
    heroTItle: makeNodeComponent("heroTItle"),
    heroIntro: makeNodeComponent("heroIntro"),
    yourPartner2: makeNodeComponent("yourPartner2"),
    profile2: makeNodeComponent("profile2"),
    aboutPartner2: makeNodeComponent("aboutPartner2"),
    titlePainpoints5: makeNodeComponent("titlePainpoints5"),
    profile3: makeNodeComponent("profile3"),
    aboutPartner3: makeNodeComponent("aboutPartner3"),
    titlePainpoints6: makeNodeComponent("titlePainpoints6"),
    partnersTop: makeNodeComponent("partnersTop"),
    logos: makeNodeComponent("logos"),
    letsTalk: makeNodeComponent("letsTalk"),
    letsTalkTitle: makeNodeComponent("letsTalkTitle"),
    introDesignSystem4: makeNodeComponent("introDesignSystem4"),
    buttonMain: makeNodeComponent("buttonMain"),
    // Metadata about props expected for PlasmicCases
    internalVariantProps: PlasmicCases__VariantProps,
    internalArgProps: PlasmicCases__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Product Designer Abdulaziz Coskun",
      description:
        "Intuitive and user-friendly app/saas that not only meet customer needs and business goals but enhance customer productivity and exceed expectations",
      ogImageSrc:
        "https://site-assets.plasmic.app/9e7d948d1fc95fea7fde02bcc5b897fe.jpg",
      canonical: ""
    }
  }
);

export default PlasmicCases;
/* prettier-ignore-end */
