import { ConfigService } from '@nestjs/config'

export async function getConfigService() {
  return new ConfigService()
}