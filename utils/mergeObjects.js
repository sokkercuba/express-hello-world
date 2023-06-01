const mergeObjects = (target, source) => {
  if (!target && source) return source
  if (target && !source) return target
  if (!target && !source) return {}

  const merged = { ...target }

  for (const key in source) {
    if (Object.hasOwnProperty.call(source, key)) {
      const sourceValue = source[key]

      if (typeof sourceValue === 'object' && sourceValue !== null) {
        const targetValue = target[key]

        if (typeof targetValue === 'object' && targetValue !== null) {
          merged[key] = mergeObjects(targetValue, sourceValue)
        } else {
          merged[key] = { ...sourceValue }
        }
      } else {
        merged[key] = sourceValue
      }
    }
  }

  return merged
}

module.exports = {
  mergeObjects
}
