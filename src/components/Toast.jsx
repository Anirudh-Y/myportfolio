import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Toast = () => {
  useEffect(() => {
    window.addEventListener("load", eventHandler);

    return () => {
      window.removeEventListener("load", eventHandler);
    };
  }),
    [];

  const eventHandler = () => {
    toast("View in Desktop/Laptop for better experience", {
      style: {
        borderRadius: "10px",
        background: "#fff",
        color: "#000",
      },
    });
  };

  return (
    <motion.div
    className="absolute top-[80px] right-[10px] w-[300px]"
      animate={{
        y: [0, 5, 0],
      }}

      transition={{
        duration:1,
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <Toaster  reverseOrder={false} />
    </motion.div>
  );
};

export default Toast;
