// interface SkillGrowthData {
//   week: number
//   skill: string
//   growth: number
// }

// // Function to estimate talent based on historical skill growth data
// export function estimateTalent(skillGrowthData: SkillGrowthData[]): number {
//   // Separate data for each skill
//   const skillData: { [skill: string]: { x: number[]; y: number[] } } = {}

//   // Populate skillData
//   skillGrowthData.forEach(({ week, skill, growth }) => {
//     if (!skillData[skill]) {
//       skillData[skill] = { x: [], y: [] }
//     }
//     skillData[skill].x.push(week)
//     skillData[skill].y.push(growth)
//   })

//   // Linear regression for each skill
//   const skillTalent: { [skill: string]: number } = {}
//   Object.keys(skillData).forEach((skill) => {
//     const { x, y } = skillData[skill]

//     // Linear regression formula: y = mx + b
//     const n = x.length
//     const sumX = x.reduce((acc, val) => acc + val, 0)
//     const sumY = y.reduce((acc, val) => acc + val, 0)
//     const sumXY = x.reduce((acc, val, index) => acc + val * y[index], 0)
//     const sumXSquare = x.reduce((acc, val) => acc + val * val, 0)

//     const m = (n * sumXY - sumX * sumY) / (n * sumXSquare - sumX * sumX)

//     // Talent is the slope of the linear regression line
//     skillTalent[skill] = m
//   })

//   // Average talent across all skills
//   const totalTalent = Object.values(skillTalent).reduce(
//     (acc, val) => acc + val,
//     0
//   )
//   const averageTalent = totalTalent / Object.keys(skillTalent).length

//   return averageTalent
// }

// // Example of usage
// const skillGrowthData: SkillGrowthData[] = [
//   { week: 1, skill: 'pace', growth: 0.5 },
//   { week: 2, skill: 'pace', growth: 0.7 }
//   // Add more data for other skills and weeks
// ]

// function calculateSkillGrowth(changes: SkillGrowthData[]) {
//   const result = {}

//   // Extracting the skills and weeks from the first and last entries
//   const finalSkills = changes[0].skills
//   const initialSkills = changes[changes.length - 1].skills
//   const weeks = changes.length - 1 // Total weeks excluding the initial state
//   console.log('weeks: ', weeks)
//   console.log('initialSkills: ', initialSkills)
//   console.log('finalSkills: ', finalSkills)

//   // Calculating the growth for each skill
//   Object.keys(initialSkills).forEach((skill) => {
//     const initialSkillValue = initialSkills[skill]
//     const finalSkillValue = finalSkills[skill]

//     // Calculating growth for the skill
//     const skillGrowth = weeks / (finalSkillValue - initialSkillValue)

//     // Assigning the growth value to the result object
//     result[skill] = skillGrowth
//   })

//   return result
// }
