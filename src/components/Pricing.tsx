'use client'
import { useShallow } from 'zustand/shallow'
import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { Checkbox } from "./ui/checkbox";
import { CheckboxWithText } from "./checkBoxWithText";
import  {useStore}  from "@/store/store";
import { CloudCog, Heading1 } from "lucide-react";

 type BillingInterval = "year" | "month";

export default function Pricing() {
  const products = useStore(useShallow((state) => state.products))
  const calculateSmallPrice = () => {
    let result = 0;
    for(let i = 0 ; i<=products.length; i++){
      if (products[0].features[i].isChecked){

        result = products[0].features[i].featurePrice + result
      }
    }
    return result

  }

  const calculateMediumPrice = () => {
    let result = 0;
    for(let i = 0 ; i<=products.length ; i++){

      if(products[1].features[i].isChecked ){

        result = products[1].features[i].featurePrice + result
      }
    }
      return result
  }

  const calculateLargePrice = () => {
    let result = 0;
    for(let i = 0 ; i<=products.length ; i++){
      if(products[2].features[i].isChecked){

        result = products[2].features[i].featurePrice + result
      }
    }
    return result

  }
  const largePrice  = calculateLargePrice()
  const mediumPrice  = calculateMediumPrice()
  const smallPrice  = calculateSmallPrice()
  console.log(smallPrice , mediumPrice , largePrice)

    console.log("this is the pricing page " , products)
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("month");
  return (
    <div className="bg-background dark:bg-background " id="pricing" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-bold text-center">Packages</h2>

        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Bit Prowler's packages are designed to provide startups with budget-friendly and highly adaptable solutions, catering to businesses of all sizes and needs.
        </p>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 sm:flex sm:flex-col sm:align-cente">
        <div className="relative self-center text-base font-semibold mt-6 bg-neutral-200  dark:bg-neutral-800 rounded-lg flex sm:mt-8">
          <button
            onClick={() => setBillingInterval("month")}
            type="button"
            className={`${
              billingInterval === "month"
                ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
            Monthly billing
          </button>
          <button
            onClick={() => setBillingInterval("year")}
            type="button"
            className={`${
              billingInterval === "year"
                ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
            Yearly billing
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-16 ">
              {products == undefined?<h1>undefined case here</h1>:        products.map(
          ({
            title,
            mostPopular,
            description,
            currency,
            price,
            frecuency,  
            cta,
            features,
            href, 
          } :any) => {
            return (
              <>
                {billingInterval === frecuency ? (
                  <div
                    key={title}
                    className={`rounded-lg py-8 relative flex flex-col ${
                      mostPopular
                        ? "border-primary border-2 border-solid dark:border-primary"
                        : "border-neutral-300 border dark:border-neutral-600"
                    }`}
                  >
                    <h3 className="px-6 text-lg font-semibold leading-5">
                      {title}
                    </h3>
                    {mostPopular && (
                      <p className="mx-6 absolute top-0 px-4 py-1 -translate-y-1/2 bg-rose-100 text-rose-500  rounded-full text-sm font-semibold tracking-wide shadow-md">
                        Most popular
                      </p>
                    )}

                    <p className="px-6 mt-4 leading-6 dark:text-neutral-400">
                      {description}
                    </p>
                    <div className="mt-2 p-6 -mx-6">
                      <p className="px-6 font-medium flex place-items-end">
                        <span className="text-4xl font-bold">{currency}</span>

                        
                        
                        {title === "small startups"? <span className="text-4xl font-bold">{smallPrice}</span>:title == "medium startups"? <span className="text-4xl font-bold">{mediumPrice}</span>: <span className="text-4xl font-bold">{largePrice}</span>  }
                        {/* <span className="text-4xl font-bold">{price}</span> */}




                        <span className="ml-1.5">/{frecuency}</span>
                      </p>
                    </div>

                    {/* Call to action */}
                    <Link
                      href={href}
                      className={`mt-4 mx-6 block px-6 py-3 font-medium leading-4 text-center rounded-lg ${
                        mostPopular
                          ? "bg-primary text-white shadow-md"
                          : "bg-primary text-white dark:bg-primary  dark:text-white"
                      }`}
                    >
                      {cta}
                    </Link>

                    {/* features */}
                    <ul className="mt-6 px-6 space-y-4 flex-1 border-t border-neutral-300 dark:border-neutral-500">
                      <p className="mt-6 font-semibold dark:text-neutral-300">
                        What&apos;s included
                      </p>
                      {features.map((feature:any) => (
                        <li key={feature.featureId} className="leading-6 flex">
                          
                          <span className="ml-3 dark:text-neutral-400">
                            {/* {features} */}
                            <CheckboxWithText featureId  = {feature.featureId} featureContent = {feature.featureContent} isChecked = {feature.isChecked }></CheckboxWithText>
                    
                           
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </>
            );
          }
        )}

      </div>
    </div>
  );
}
