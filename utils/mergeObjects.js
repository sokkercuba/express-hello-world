function mergeTraining(target, source) {
  if (!target?.length && source) return source
  if (target && !source?.length) return target
  if (!target?.length && !source?.length) return []

  const uniqueWeeks = new Set(target.map((obj) => obj.week))
  const merged = [...target]

  for (const sourceObj of source) {
    if (!uniqueWeeks.has(sourceObj.week)) {
      merged.push(sourceObj)
      uniqueWeeks.add(sourceObj.week)
    }
  }

  return merged
}

function mergeJuniors(target, source) {
  if (!target?.length && source) return source
  if (target && !source?.length) return target
  if (!target?.length && !source?.length) return []

  const sourceSkillsMap = {}
  source.forEach((item) => {
    sourceSkillsMap[item.id] = {
      skills: item.skill,
      weeksLeft: item.weeksLeft
    }
  })

  const mergedJuniors = target.map((junior) => {
    const sourceSkills = sourceSkillsMap[junior.id]

    const skillsHistory = [{ [junior.weeksLeft]: junior.skill }]
    if (sourceSkills && sourceSkills.weeksLeft !== junior.weeksLeft) {
      skillsHistory.push({ [sourceSkills.weeksLeft]: sourceSkills.skills })
    }

    return {
      ...junior,
      skillsHistory
    }
  })

  return mergedJuniors
}

module.exports = {
  mergeTraining,
  mergeJuniors
}
