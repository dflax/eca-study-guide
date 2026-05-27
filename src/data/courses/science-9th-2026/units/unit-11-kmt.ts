import type { Unit } from '@/types/study';

export const unit11Kmt: Unit = {
  id: 'unit-11-kmt',
  number: 11,
  title: 'Kinetic Molecular Theory',
  description: 'KMT postulates, phase diagrams, heating curves, evaporation, specific heat capacity, and endothermic/exothermic phase changes.',
  notes: [
    {
      heading: 'Kinetic Molecular Theory (KMT) of Gases',
      content: 'The Kinetic Molecular Theory (KMT) explains the behavior of gases using 5 postulates:\n\n1. Gases consist of tiny particles (atoms or molecules) that are in constant, RANDOM motion.\n\n2. The particles themselves have NEGLIGIBLE VOLUME compared to the volume of the container. Gases are mostly empty space.\n\n3. Gas particles exert NO ATTRACTIVE OR REPULSIVE FORCES on each other (no IMF between gas particles in ideal conditions).\n\n4. Gas particles undergo PERFECTLY ELASTIC COLLISIONS — they bounce off each other and the container walls without losing energy. No kinetic energy is lost in these collisions.\n\n5. The AVERAGE KINETIC ENERGY of gas particles is directly proportional to the TEMPERATURE (in Kelvin). Higher temperature = faster-moving particles = higher average KE.\n\nKey concept: At the same temperature, all gas particles (regardless of mass) have the SAME average kinetic energy. Heavier particles move MORE SLOWLY; lighter particles move FASTER (same KE, different speeds).',
      bullets: [
        'Postulate 1: Particles in constant random motion',
        'Postulate 2: Particle volume is negligible (mostly empty space)',
        'Postulate 3: No intermolecular forces between gas particles (ideal gas)',
        'Postulate 4: Elastic collisions — no energy lost',
        'Postulate 5: Average KE ∝ Temperature (Kelvin)',
      ],
    },
    {
      heading: 'Phase Changes',
      content: 'Phase changes are physical changes involving transitions between solid, liquid, and gas states. They involve energy changes but NOT temperature changes during the transition.\n\nPhase change names:\n• Melting: solid → liquid (absorbs energy; endothermic)\n• Freezing: liquid → solid (releases energy; exothermic)\n• Boiling/Vaporization: liquid → gas (absorbs energy; endothermic)\n• Condensation: gas → liquid (releases energy; exothermic)\n• Sublimation: solid → gas directly (absorbs energy; endothermic)\n• Deposition: gas → solid directly (releases energy; exothermic)\n\nEndothermic phase changes: energy must be ABSORBED (melting, vaporization, sublimation)\nExothermic phase changes: energy is RELEASED (freezing, condensation, deposition)\n\nMemory aid: Endothermic = energy INPUT needed to break bonds/forces = going from more ordered → less ordered state. Exothermic = energy RELEASED when IMF form = going from less ordered → more ordered.',
      bullets: [
        'Solid → liquid → gas: all endothermic (absorb energy)',
        'Gas → liquid → solid: all exothermic (release energy)',
        'During a phase change: temperature is CONSTANT (energy goes into changing state)',
        'Sublimation skips liquid; Deposition skips liquid (going the other way)',
      ],
    },
    {
      heading: 'Heating Curves',
      content: 'A heating curve shows temperature vs. energy added for a substance as it goes from solid → liquid → gas.\n\nShape of the heating curve:\n• Sloped line rising: solid being heated (temperature increases)\n• Horizontal line (plateau): MELTING — solid and liquid coexist, temperature stays constant at the melting point\n• Sloped line rising: liquid being heated (temperature increases)\n• Horizontal line (plateau): BOILING — liquid and gas coexist, temperature stays constant at the boiling point\n• Sloped line rising: gas being heated (temperature increases)\n\nReading a heating curve:\n• The temperature where the first plateau occurs = melting point\n• The temperature where the second plateau occurs = boiling point\n• The SLOPE of each rising segment indicates specific heat capacity:\n  • Steeper slope = temperature rises faster = LOWER specific heat capacity\n  • Flatter slope = temperature rises slower = HIGHER specific heat capacity\n\nSpecific heat capacity (c): the amount of energy needed to raise 1 gram of a substance by 1°C. Water has an unusually HIGH specific heat (4.18 J/g·°C).',
      bullets: [
        'Rising segments = heating solid, liquid, or gas (temperature increases)',
        'Flat segments = phase changes (melting or boiling — temperature constant)',
        'Steeper slope = lower specific heat = less energy needed per degree',
        'Flatter slope = higher specific heat = more energy needed per degree',
      ],
    },
    {
      heading: 'Phase Diagrams',
      content: 'A phase diagram shows the physical state of a substance at different combinations of temperature and pressure.\n\nRegions on a phase diagram:\n• Solid region: low temperature, high pressure (usually top-left)\n• Liquid region: moderate temperature and pressure (usually middle)\n• Gas region: high temperature, low pressure (usually bottom-right)\n• Supercritical fluid region: above the critical point\n\nKey points:\n• Triple point: the unique temperature AND pressure where all THREE phases coexist in equilibrium\n• Critical point: the temperature and pressure beyond which gas and liquid phases cannot be distinguished — becomes a "supercritical fluid"\n\nReading a phase diagram:\n• Find the temperature along the x-axis and pressure on the y-axis\n• Read which region the point falls in → that\'s the physical state\n• Freezing/melting point: where solid-liquid line crosses a given pressure\n• Boiling point: where liquid-gas line crosses a given pressure\n• Predict phase change: if you increase temperature at constant pressure, cross the boundary line = phase change occurs',
      bullets: [
        'Triple point: all three phases in equilibrium simultaneously',
        'Critical point: beyond this, only supercritical fluid exists',
        'Phase boundaries: crossing a line = a phase change occurs',
        'Normal boiling/melting points are at 1 atm (standard pressure)',
      ],
    },
    {
      heading: 'Evaporation and KE Distribution',
      content: 'Evaporation is the process where molecules at the SURFACE of a liquid escape into the gas phase at temperatures BELOW the boiling point.\n\nFor a molecule to evaporate, it must have enough kinetic energy to overcome the intermolecular forces holding it in the liquid.\n\nFactors that increase evaporation rate:\n• Higher temperature: more molecules have enough KE to escape\n• Greater surface area: more molecules exposed at the surface\n• Lower external pressure: less pressure suppressing the vapor phase\n\nKE distribution graph (# particles vs. kinetic energy):\n• Shows a curve: most particles have intermediate KE\n• Higher temperature: curve shifts RIGHT (higher average KE)\n• At higher temperature: MORE particles have enough energy to evaporate\n• The shaded region above the minimum evaporation energy represents molecules that CAN evaporate',
      bullets: [
        'Evaporation happens below the boiling point (surface molecules only)',
        'Higher T → more particles with enough KE to evaporate → faster evaporation',
        'Larger surface area → more surface molecules → faster evaporation',
        'On KE distribution graph: higher T curve = shifted right = more particles in high-KE region',
      ],
    },
  ],
  flashcards: [
    {
      id: 'unit-11-kmt-fc-01',
      front: 'State the 5 postulates of Kinetic Molecular Theory.',
      back: '1. Gas particles are in constant, random motion\n2. Particle volume is negligible vs. container volume\n3. No attractive/repulsive forces between particles (ideal)\n4. Elastic collisions (no energy loss)\n5. Average KE is proportional to temperature (Kelvin)',
    },
    {
      id: 'unit-11-kmt-fc-02',
      front: 'What is the difference between melting and freezing?',
      back: 'Melting: solid → liquid (endothermic — absorbs energy)\nFreezing: liquid → solid (exothermic — releases energy)\nBoth occur at the same temperature (the melting/freezing point). Direction = energy direction.',
    },
    {
      id: 'unit-11-kmt-fc-03',
      front: 'What is sublimation and deposition?',
      back: 'Sublimation: solid → gas DIRECTLY (skips liquid state), endothermic\nDeposition: gas → solid DIRECTLY (skips liquid state), exothermic\nExample: Dry ice (CO₂) sublimes at room temperature.',
    },
    {
      id: 'unit-11-kmt-fc-04',
      front: 'On a heating curve, what does a FLAT (horizontal) segment represent?',
      back: 'A flat segment represents a PHASE CHANGE — where two phases coexist and temperature remains CONSTANT. All added energy goes into breaking intermolecular forces to change state (not into raising temperature).\nFirst plateau = melting point; second plateau = boiling point.',
    },
    {
      id: 'unit-11-kmt-fc-05',
      front: 'How does the SLOPE of a heating curve indicate specific heat capacity?',
      back: 'Steeper slope = temperature rises quickly with little energy = LOWER specific heat capacity (easier to heat up)\nFlatter/gentler slope = temperature rises slowly = HIGHER specific heat capacity (takes more energy per degree)\nCompare slopes of two substances to determine which has higher c.',
    },
    {
      id: 'unit-11-kmt-fc-06',
      front: 'What is the triple point on a phase diagram?',
      back: 'The triple point is the unique temperature AND pressure at which all THREE phases (solid, liquid, and gas) of a substance coexist in equilibrium simultaneously. It is a single specific point on the phase diagram.',
    },
    {
      id: 'unit-11-kmt-fc-07',
      front: 'What is the critical point on a phase diagram?',
      back: 'The critical point is the temperature and pressure beyond which the distinct boundary between liquid and gas phases disappears. Above the critical point, the substance exists as a SUPERCRITICAL FLUID with properties of both liquid and gas.',
    },
    {
      id: 'unit-11-kmt-fc-08',
      front: 'Are phase changes endothermic or exothermic? Give examples.',
      back: 'Endothermic (absorb energy): melting, vaporization/boiling, sublimation (solid→liquid, liquid→gas, solid→gas)\nExothermic (release energy): freezing, condensation, deposition (gas→liquid, gas→solid, liquid→solid)\nRule: going to a higher-energy, less-ordered state = endothermic.',
    },
    {
      id: 'unit-11-kmt-fc-09',
      front: 'What three factors increase the rate of evaporation?',
      back: '1. Higher temperature (more molecules have enough KE to escape)\n2. Greater surface area (more molecules exposed at the surface)\n3. Lower external pressure (less resistance to vapor forming)\nEvaporation is a surface phenomenon — only surface molecules escape.',
    },
    {
      id: 'unit-11-kmt-fc-10',
      front: 'On a KE distribution graph, what does the region to the RIGHT of a minimum KE threshold represent?',
      back: 'The region to the right of the minimum evaporation energy represents molecules with ENOUGH kinetic energy to evaporate. As temperature increases, the curve shifts right — more molecules fall in this region — so evaporation rate increases.',
    },
    {
      id: 'unit-11-kmt-fc-11',
      front: 'What happens to temperature during a phase change on a heating curve?',
      back: 'Temperature remains CONSTANT during a phase change. All the energy being added goes into breaking or forming intermolecular forces (changing the state), NOT into increasing molecular motion/temperature.',
    },
    {
      id: 'unit-11-kmt-fc-12',
      front: 'According to KMT, what is the relationship between temperature and average kinetic energy?',
      back: 'Average kinetic energy of gas particles is directly proportional to the ABSOLUTE temperature (in Kelvin). Higher temperature = higher average KE = faster-moving particles. At the same temperature, all gases have the same average KE.',
    },
  ],
  quiz: [
    {
      id: 'unit-11-kmt-q-01',
      question: 'According to KMT Postulate 4, what is an "elastic collision"?',
      options: [
        'A collision where molecules stick together',
        'A collision where no kinetic energy is lost — kinetic energy is conserved',
        'A collision that produces heat',
        'A collision where molecules slow down permanently',
      ],
      correctIndex: 1,
      explanation: 'Elastic collisions conserve kinetic energy — KE is transferred between particles but none is lost to heat or other forms. Gas particles bounce off each other and container walls without losing energy overall.',
    },
    {
      id: 'unit-11-kmt-q-02',
      question: 'On a heating curve, what does the second (higher temperature) flat segment represent?',
      options: [
        'The substance is melting',
        'The substance is frozen',
        'The substance is boiling (liquid ↔ gas phase change)',
        'The substance is being cooled',
      ],
      correctIndex: 2,
      explanation: 'The second plateau (at higher temperature) is the boiling point — where liquid and gas coexist. Temperature stays constant until all the liquid has converted to gas. Energy is going into overcoming IMF, not raising temperature.',
    },
    {
      id: 'unit-11-kmt-q-03',
      question: 'Which phase change is EXOTHERMIC?',
      options: [
        'Melting',
        'Sublimation',
        'Vaporization',
        'Condensation',
      ],
      correctIndex: 3,
      explanation: 'Condensation (gas → liquid) is exothermic — energy is RELEASED when gas molecules slow down and form intermolecular forces to become liquid. Melting, sublimation, and vaporization all require energy input (endothermic).',
    },
    {
      id: 'unit-11-kmt-q-04',
      question: 'If substance A has a steeper slope on its heating curve than substance B (for the same substance being heated), what does this tell you?',
      options: [
        'A has a higher specific heat capacity than B',
        'A has a lower specific heat capacity than B',
        'A and B have the same specific heat',
        'A has a higher boiling point than B',
      ],
      correctIndex: 1,
      explanation: 'Steeper slope means temperature increases faster with less energy added → lower specific heat capacity. A requires less energy per gram per degree. Water\'s high specific heat makes its curve relatively flat — it takes a lot of energy to heat water.',
    },
    {
      id: 'unit-11-kmt-q-05',
      question: 'What is TRUE about the triple point on a phase diagram?',
      options: [
        'It is the highest temperature at which a substance can exist as a liquid',
        'It is where only two phases can coexist',
        'It is the unique temperature and pressure where all three phases coexist',
        'It represents the normal boiling point',
      ],
      correctIndex: 2,
      explanation: 'The triple point is a unique, single combination of temperature and pressure at which solid, liquid, AND gas all coexist simultaneously in equilibrium. Every pure substance has exactly one triple point.',
    },
    {
      id: 'unit-11-kmt-q-06',
      question: 'On a graph of number of particles vs. kinetic energy, if temperature increases, what happens to the curve?',
      options: [
        'The curve shifts LEFT — average KE decreases',
        'The curve shifts RIGHT and flattens — average KE increases',
        'The curve gets taller and narrower',
        'The curve does not change — KE is independent of temperature',
      ],
      correctIndex: 1,
      explanation: 'At higher temperature, particles have more kinetic energy on average. The distribution curve shifts RIGHT (higher average KE) and becomes flatter/broader (more spread of energies). More particles fall in the high-KE region to the right.',
    },
    {
      id: 'unit-11-kmt-q-07',
      question: 'Which of the following INCREASES the rate of evaporation?',
      options: [
        'Decreasing temperature',
        'Decreasing surface area',
        'Increasing external pressure',
        'Increasing temperature',
      ],
      correctIndex: 3,
      explanation: 'Increasing temperature gives more molecules enough kinetic energy to overcome the IMF holding them in the liquid and escape as gas. Higher T = faster evaporation. Decreased SA, lower T, or higher pressure all slow evaporation.',
    },
    {
      id: 'unit-11-kmt-q-08',
      question: 'Dry ice (solid CO₂) converts directly to CO₂ gas at room temperature without first becoming liquid. What is this phase change called?',
      options: [
        'Condensation',
        'Deposition',
        'Sublimation',
        'Evaporation',
      ],
      correctIndex: 2,
      explanation: 'Sublimation is the direct conversion from SOLID to GAS, bypassing the liquid state. Dry ice sublimes at room temperature and pressure because CO₂\'s triple point is above atmospheric pressure.',
    },
    {
      id: 'unit-11-kmt-q-09',
      question: 'A phase diagram shows that at 1 atm pressure, a substance is in the GAS region. If you increase the pressure significantly while keeping temperature constant, what phase change might occur?',
      options: [
        'Gas → liquid (condensation)',
        'Gas → solid (deposition or sublimation in reverse)',
        'Liquid → solid (freezing)',
        'No phase change — pressure doesn\'t affect phase',
      ],
      correctIndex: 0,
      explanation: 'Increasing pressure at constant temperature moves you upward on the phase diagram. If you cross the liquid-gas boundary, the gas condenses to a liquid. High pressure compresses gas molecules close enough together that IMF become significant.',
    },
    {
      id: 'unit-11-kmt-q-10',
      question: 'According to KMT, what happens at a higher temperature in a gas sample?',
      options: [
        'Gas particles become larger in size',
        'Gas particles develop attractive forces',
        'Gas particles collide less frequently',
        'Gas particles have greater average kinetic energy and move faster',
      ],
      correctIndex: 3,
      explanation: 'KMT Postulate 5: Average kinetic energy ∝ Temperature (Kelvin). At higher temperature, gas particles have greater average KE, meaning they move faster. More frequent and more forceful collisions with container walls result in higher pressure.',
    },
    {
      id: 'unit-11-kmt-q-11',
      question: 'On a heating curve, how can you determine the boiling point of a substance?',
      options: [
        'It is the temperature at the steepest slope on the curve',
        'It is the temperature at the START of the first flat segment',
        'It is the temperature at the start of the SECOND flat (plateau) segment',
        'It is the highest temperature shown on the curve',
      ],
      correctIndex: 2,
      explanation: 'The boiling point is read from the SECOND plateau on the heating curve. The first plateau is the melting point. At the boiling point, energy is absorbed to convert liquid to gas at constant temperature.',
    },
  ],
};
