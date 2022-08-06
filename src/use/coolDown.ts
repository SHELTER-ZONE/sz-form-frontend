import { useStorage } from '@vueuse/core'
import { reactive } from 'vue'
import dayjs from 'dayjs'

interface CoolDown {
  [key: string]: Date | null
}

export const useCoolDown = () => {
  const coolDown: CoolDown = reactive({
    form: useStorage('formCoolDown', null),
  })

  const startCoolDown = (key: string, minutes: number) => {
    const exp = dayjs().add(minutes, 'm').toDate()
    coolDown[key] = exp
  }

  const inCoolDown = (key: string): Boolean => {
    return Boolean(coolDown[key]) && dayjs().isBefore(dayjs(coolDown[key]))
  }

  const coolDownLeft = (key: string): Number => {
    if (coolDown[key]) {
      const ago = dayjs(coolDown[key]).diff(dayjs(), 's')
      return ago > 0 ? ago : 0
    }
    return 0
  }

  return {
    coolDown,
    startCoolDown,
    inCoolDown,
    coolDownLeft,
  }
}
