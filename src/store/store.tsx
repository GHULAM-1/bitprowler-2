import { stat } from 'fs';
import { create } from 'zustand'

const pack = [
    {
      title: "small startups",
      price: 0,
      currency: "$",
      frecuency: "month",
      description: "you can customize this shit however you like ",
      features: [
        {
          isChecked : true,
          featurePrice:250,
          featureContent:"web development",
          featureId : "sm-1"
        },
        {
          isChecked : true,
          featurePrice:250,
          featureContent:"marketing",
          featureId : "sm-2"
        },
        {
          isChecked : true,
          featurePrice:250,
          featureContent:"mobile development",
          featureId : "sm-3"
        },
        {
          isChecked : true,
          featurePrice:250,
          featureContent:"UI/Ux",
          featureId : "sm-4"
        },

        
      ],
      href: "/packages/small-startups",
      cta: "see detalis",
      mostPopular: false,
    },



    // medium startups
    {
      title: "medium startups",
      price: 0,
      currency: "$",
      frecuency: "month",
      description: "you can customize this shit however you like ",
      features: [
        {
          isChecked : true,
          featurePrice:500,
          featureContent:"web development",
          featureId : "md-1"
        },
        {
          isChecked : true,
          featurePrice:500,
          featureContent:"marketing",
          featureId : "md-2"
        },
        {
          isChecked : true,
          featurePrice:500,
          featureContent:"mobile development",
          featureId : "md-3"
        },
        {
          isChecked : true,
          featurePrice:500,
          featureContent:"UI/Ux",
          featureId : "md-4"
        },

        
      ],
      href: "/packages/medium-startups",
      cta: "see details",
      mostPopular: true,
    },

    // large startups
    {
      title: "large startups",
      price: 0,
      currency: "$",
      frecuency: "month",
      description: "you can customize this shit however you like ",
      features: [
        {
          isChecked : true,
          featurePrice:1000,
          featureContent:"web development",
          featureId : "lg-1"
        },
        {
          isChecked : true,
          featurePrice:1000,
          featureContent:"marketing",
          featureId : "lg-2"
        },
        {
          isChecked : true,
          featurePrice:1000,
          featureContent:"mobile development",
          featureId : "lg-3"
        },
        {
          isChecked : true,
          featurePrice:1000,
          featureContent:"UI/Ux",
          featureId : "lg-4"
        },

        
      ],
      href: "/packages/large-startups",
      cta: "see details",
      mostPopular: false ,
    },
    
  ];



const handleToggleState = (state:any, checkBoxId:any) => {
  const packageInitialName = checkBoxId.split("-")[0];
  const packageNumber = Number(checkBoxId.split("-")[1]);

  console.log(packageInitialName);

  return {
    products: state.products.map((pack:any, index:any) => {
      if (packageInitialName === "sm" && index === 0) {
        const updatedFeatures = pack.features.map((feature:any, featureIndex:any) => {
          if (featureIndex === packageNumber - 1) {
            // Toggle the isChecked property immutably
            return {
              ...feature,
              isChecked: !feature.isChecked,
            };
          } else {
            return feature;
          }
        });

        return {
          ...pack,
          features: updatedFeatures,
        };
      } 

     else if (packageInitialName === "md" && index === 1) {
        const updatedFeatures = pack.features.map((feature:any, featureIndex:any) => {
          if (featureIndex === packageNumber - 1) {
            // Toggle the isChecked property immutably
            return {
              ...feature,
              isChecked: !feature.isChecked,
            };
          } else {
            return feature;
          }
        });

        return {
          ...pack,
          features: updatedFeatures,
        };
      } 

      else if (packageInitialName === "lg" && index === 2) {
        const updatedFeatures = pack.features.map((feature:any, featureIndex:any) => {
          if (featureIndex === packageNumber - 1) {
            // Toggle the isChecked property immutably
            return {
              ...feature,
              isChecked: !feature.isChecked,
            };
          } else {
            return feature;
          }
        });

        return {
          ...pack,
          features: updatedFeatures,
        };
      } 
      
      
      else {
        return pack ;
      }
    }),
  };
};





 export const useStore = create((set:any) => ({

products : pack,
toggleCheckState : (checkBoxId:any) => set((state:any) => handleToggleState(state , checkBoxId))


}))