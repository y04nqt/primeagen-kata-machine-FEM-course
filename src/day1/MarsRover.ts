

export default function mars_rover(commands: string[]) {
    const directions: {[key:string]: number[]} = {
        n: [0, 1],
        e: [1, 0],
        w: [-1, 0],
        s: [0, -1],
    };
    const home = [0, 0];
    let robotDir = "n";
    let robotPos = home;
    let away = false;
    let returned = false;

    /* i figured these functions were the easiest way for me to think about how to rotate directions */
    /* I still think there may be a better way but would need more time to think through it or research */
    const changeRight = (dir: string): string => {
        if (dir === "n") {
            return "e";
        }
        if (dir === "e") {
            return "s";
        }
        if (dir === "s") {
            return "w";
        }
        if (dir === "w") {
            return "n";
        }
        return dir;
    };

    const changeLeft = (dir: string): string => {
        if (dir === "n") {
            return "w";
        }
        if (dir === "e") {
            return "n";
        }
        if (dir === "s") {
            return "e";
        }
        if (dir === "w") {
            return "s";
        }
        return dir;
    };

    for (let i = 0; i < commands.length; i++) {
        const cmdList = commands[i].split("");
        if (returned) {
            // if we returned no need to continue running commands
            break;
        }
        for (let j = 0; j < cmdList.length; j++) {
            if (cmdList[j] === "G") {
                if (robotPos[0] !== 0 && robotPos[1] !== 0) {
                    away = true;
                } else {
                    if (away) {
                        away = false;
                        returned = true;
                    }
                }
                robotPos[0] += directions[robotDir][0];
                robotPos[1] += directions[robotDir][1];
            }
            if (cmdList[j] === "R") {
                robotDir = changeRight(robotDir);
            }
            if (cmdList[j] === "L") {
                robotDir = changeLeft(robotDir);
            }
            if (returned) {
                console.log("YES");
                return true;
            }
            // examining movement in console
        }
    }
    /* If never returned home */
    if (!returned) {
        console.log("NO");
    }
    return false;
}
