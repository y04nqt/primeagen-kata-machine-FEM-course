import mars_rover from "@code/MarsRover";

const cmd1 = ['RRRRRRRLLLLLRG', 'LRLRLRLRLRLRLRLRLRLRLRLRLRGG', 'RLRLRLLRLLLLLLRRRG', 'RRRRG']; // this one does not work
const cmd2 = ['RLRLGLRGLRLLRGLRLG', 'RGRLGRLGLRGLRLG', 'RRRGGGGLLLLLGGGGRGRG']; // this one also works, but because I break it doesn't run every single command, removing the breaks would enable it to run the rest
const cmd3 = ['GRGRGRGR',]; // works

test('mars rover', () => {
    // doesn't return home
    expect(mars_rover(cmd1)).toBe(false);

    // does return home
    expect(mars_rover(cmd2)).toBe(true);
    expect(mars_rover(cmd3)).toBe(true);
})