export const mobile = false;
export const range = n => [...Array(n).keys()];
export const localhost = location.hostname === "localhost";
export const materials = {
    blood: range(6).map(i => 24290 + i),
    bone: [].concat(range(4).map(i => 24342 + i), [24341], [24358]),
    claw: range(6).map(i => 24346 + i),
    dust: range(6).map(i => 24272 + i),
    fang: range(6).map(i => 24352 + i),
    scale: range(6).map(i => 24284 + i),
    totem: [].concat(range(4).map(i => 24296 + i), [24363], [24300]),
    sac: range(6).map(i => 24278 + i),
};

export const material_names = {
    blood: [
        'Vial of Weak Blood',
        'Vial of Thin Blood',
        'Vial of Blood',
        'Vial of Thick Blood',
        'Vial of Potent Blood',
        'Vial of Powerful Blood',
    ],
    bone: [
        'Bone Chip',
        'Bone Shard',
        'Bone',
        'Heavy Bone',
        'Large Bone',
        'Ancient Bone',
    ],
    claw: [
        'Tiny Claw',
        'Small Claw',
        'Claw',
        'Sharp Claw',
        'Large Claw',
        'Vicious Claw',
    ],
    dust: [
        'Pile of Glittering Dust',
        'Pile of Shimmering Dust',
        'Pile of Radiant Dust',
        'Pile of Luminous Dust',
        'Pile of Incandescent Dust',
        'Pile of Crystalline Dust',
    ],
    fang: [
        
        'Tiny Fang',
        'Small Fang',
        'Fang',
        'Sharp Fang',
        'Large Fang',
        'Vicious Fang',
    ],
    scale: [
        
        'Tiny Scale',
        'Small Scale',
        'Scale',
        'Smooth Scale',
        'Large Scale',
        'Armored Scale',
    ],
    totem: [
        'Tiny Totem',
        'Small Totem',
        'Totem',
        'Intricate Totem',
        'Engraved Totem',
        'Elaborate Totem',
    ],
    sac: [      
        'Tiny Venom Sac',
        'Small Venom Sac',
        'Venom Sac',
        'Full Venom Sac',
        'Potent Venom Sac',
        'Powerful Venom Sac',
    ],
};