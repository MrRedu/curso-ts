;(() => {
  enum AudioLevel {
    min = 1,
    medium,
    max = 10,
  }

  let currentAudio: AudioLevel = AudioLevel.medium

  console.log(currentAudio) // 2
  console.log(AudioLevel)
})()
