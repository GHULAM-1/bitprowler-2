'use client'
import { CheckboxWithText } from "@/components/checkBoxWithText"
import { H2 } from "@/components/typography/H2"
import Link from "next/link"
import { P } from "@/components/typography/P"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { motion, useScroll, useSpring } from "framer-motion";
import "@/app/framer.css"
import { useStore } from "@/store/store"
import { H1 } from "@/components/typography/H1"
import { LARGETTEXT } from "@/components/typography/LARGETEXT"
import { H4 } from "@/components/typography/H4"
import { H3 } from "@/components/typography/H3"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"


export default function SmallStartups() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const smallStarups = useStore(state => state.products[0])
  console.log(smallStarups)
  const calculateSmallPrice = () => {
    let result = 0;
    for (let i = 0; i < smallStarups.features.length; i++) {
      if (smallStarups.features[i].isChecked) {

        result = smallStarups.features[i].featurePrice + result
      }
    }
    return result

  }
  const smallPrice = calculateSmallPrice()
  return (
    <>
      <Navbar></Navbar>
      <motion.div className="progress-bar" style={{ scaleX }} />

      <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
        <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
          <H1 >
            Package for Small Startups
          </H1>
          <div className="mt-[1.5rem]">
            <H4>
              you can estimate the cost by check/uncheck services
            </H4>
          </div>
        </div>
        <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
          <div className="grid gap-6">
            <LARGETTEXT className="text-xl font-bold sm:text-2xl">
              What&apos;s included in the {smallStarups.title} plan
            </LARGETTEXT>
            <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">

              {smallStarups.features.map((feature: any) => (
                <li key={feature.featureId} className="flex items-center">


                  <span className="ml-3 dark:text-neutral-400">
                    {/* {features} */}
                    <CheckboxWithText featureId={feature.featureId} featureContent={feature.featureContent} isChecked={feature.isChecked}></CheckboxWithText>


                  </span>

                </li>
              ))}

            </ul>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <div>
              <h4 className="text-7xl font-bold">{smallPrice}$</h4>

            </div>
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
              Contact us
            </Link>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">

        </div>
      </section>


      {/* // content explanation */}
      <div className="mx-[12rem]">


        <div className="mb-[4rem]">

          <H2>Web Development</H2>
          <P>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat aliquam eaque, nam dolores cumque enim culpa distinctio numquam. Totam quidem harum est quaerat quia quisquam sed dolorum tempore magnam pariatur.
          </P>

          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>One landing page</li>
            <li>three pages (other than landing page )</li>
            <li>fully responsive website</li>
            <li>one form integration </li>

          </ul>


        </div>


        <div className="mb-[4rem]">
          <H2>Social Media Management</H2>
          <P>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat aliquam eaque, nam dolores cumque enim culpa distinctio numquam. Totam quidem harum est quaerat quia quisquam sed dolorum tempore magnam pariatur.
          </P>

          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>One landing page</li>
            <li>three pages (other than landing page )</li>
            <li>fully responsive website</li>
            <li>one form integration </li>

          </ul>
        </div>


        <div className="mb-[4rem]">
          <H2>SEO</H2>
          <P>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat aliquam eaque, nam dolores cumque enim culpa distinctio numquam. Totam quidem harum est quaerat quia quisquam sed dolorum tempore magnam pariatur.
          </P>

          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>One landing page</li>
            <li>three pages (other than landing page )</li>
            <li>fully responsive website</li>
            <li>one form integration </li>

          </ul>
        </div>



        <div className="mb-[4rem]">
          <H2>Product Design</H2>
          <P>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat aliquam eaque, nam dolores cumque enim culpa distinctio numquam. Totam quidem harum est quaerat quia quisquam sed dolorum tempore magnam pariatur.
          </P>

          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>One landing page</li>
            <li>three pages (other than landing page )</li>
            <li>fully responsive website</li>
            <li>one form integration </li>

          </ul>
        </div>



        <div className="mb-[4rem]">
          <H2>Security</H2>
          <P>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat aliquam eaque, nam dolores cumque enim culpa distinctio numquam. Totam quidem harum est quaerat quia quisquam sed dolorum tempore magnam pariatur.
          </P>

          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>One landing page</li>
            <li>three pages (other than landing page )</li>
            <li>fully responsive website</li>
            <li>one form integration </li>

          </ul>
        </div>



        <div className="my-6 w-full overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  King's Treasury
                </th>
                <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  People's happiness
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Empty
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Overflowing
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Modest
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Satisfied
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Full
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Ecstatic
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>


    </>


  )
}
