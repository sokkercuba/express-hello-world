function mergeObjects(target, source) {
  if (!target?.length && source) return source
  if (target && !source?.length) return target
  if (!target?.length && !source?.length) return []

  const sourceMap = {}
  for (const obj of source) {
    sourceMap[obj.id] = obj
  }

  const merged = []
  for (const obj of target) {
    const sourceObj = sourceMap[obj.id]
    const mergedObj = sourceObj ? { ...obj, ...sourceObj } : obj
    merged.push(mergedObj)
  }

  return merged
}

module.exports = {
  mergeObjects
}
