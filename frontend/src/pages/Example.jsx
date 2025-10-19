import { useState } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    AnimatePresence
} from "framer-motion";

function Card({ frontCard, index, setIndex, drag, content }) {
    const [exitX, setExitX] = useState(0);

    const x = useMotionValue(0);
    const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
    const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
        clamp: false
    });

    const variantsFrontCard = {
        animate: { scale: 1, y: 0, opacity: 1 },
        exit: (custom) => ({
            x: custom,
            opacity: 0,
            scale: 0.5,
            transition: { duration: 0.2 }
        })
    };
    const variantsBackCard = {
        initial: { scale: 0, y: 105, opacity: 0 },
        animate: { scale: 0.75, y: 30, opacity: 0.5 }
    };

    function handleDragEnd(_, info) {
        if (info.offset.x < -100) {
            setExitX(-250);
            setIndex(index + 1);
        }
        if (info.offset.x > 100) {
            setExitX(250);
            setIndex(index + 1);
        }
    }

    return (
        <motion.div
            style={{
                width: 150,
                height: 150,
                position: "absolute",
                top: 0,
                x,
                rotate,
                cursor: "grab"
            }}
            whileTap={{ cursor: "grabbing" }}
            drag={drag}
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            onDragEnd={handleDragEnd}
            variants={frontCard ? variantsFrontCard : variantsBackCard}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={exitX}
            transition={
                frontCard
                    ? { type: "spring", stiffness: 300, damping: 20 }
                    : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
            }
        >
            <motion.div
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#052",
                    borderRadius: 30,
                    scale,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                    textAlign: "center"
                }}
            >
                {content}
            </motion.div>
        </motion.div>
    );
}

export function Example() {
    const [index, setIndex] = useState(0);
    const contents = ["Balance", "Contrast", "Emphasis", "Movement", "Pattern", "Rhythm", "Unity"]; // Array of texts

    return (
        <motion.div style={{ width: 150, height: 150, position: "relative" }}>
            <AnimatePresence initial={false}>
                <Card key={index + 1} frontCard={false} content={contents[(index + 1) % contents.length]} />
                <Card
                    key={index}
                    frontCard={true}
                    index={index}
                    setIndex={setIndex}
                    drag="x"
                    content={contents[index % contents.length]} // Change content dynamically
                />
            </AnimatePresence>
        </motion.div>
    );
}