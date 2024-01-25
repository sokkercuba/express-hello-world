function mergeReports(targetReports, sourceReports) {
  const uniqueWeeks = new Set(targetReports.map((report) => report.week))
  const mergedReports = [...targetReports]

  for (const sourceReport of sourceReports) {
    if (!uniqueWeeks.has(sourceReport.week)) {
      mergedReports.push(sourceReport)
      uniqueWeeks.add(sourceReport.week)
    }
  }

  // Sort the merged reports by the "week" property in descending order
  mergedReports.sort((a, b) => b.week - a.week)

  return mergedReports
}

function mergeTraining(target, source) {
  if (!target?.length && source) return source
  if (target && !source?.length) return target
  if (!target?.length && !source?.length) return []

  const merged = [...target]

  for (const sourceObj of source) {
    const targetObjIndex = merged.findIndex(
      (targetObj) => targetObj.id === sourceObj.id
    )

    if (targetObjIndex === -1) {
      // If the object with the same ID is not found, add it to the merged array
      merged.push(sourceObj)
    } else {
      // If the object with the same ID is found, merge the "reports" property
      const targetReports = merged[targetObjIndex].reports || []
      const sourceReports = sourceObj.reports || []
      const mergedReports = mergeReports(targetReports, sourceReports)

      merged[targetObjIndex] = {
        ...merged[targetObjIndex],
        reports: mergedReports
      }
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
