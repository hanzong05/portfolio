import React, {useEffect,useRef} from "react";

import { motion } from 'framer-motion';

export default function Reveal() {
    const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#5686F5",
    borderRadius: "50%",
}
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={ball}
        />
    )
}