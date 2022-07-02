import { motion,Variants } from "framer-motion";

export const headerVariant ={
    initial:{
      x:1000,
      opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{duration:1,ease:"easeInOut"}
    }
  }