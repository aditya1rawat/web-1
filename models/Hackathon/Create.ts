import { HackathonSkill } from '.'

export default interface CreateHackathonData {
	id: CreateHackathonId
	name: string
	subtitle: string
	bits: number
	skill: HackathonSkill[]
	tags: string[]
	time: CreateHackathonTime
}

export interface CreateHackathonId {
	value: string
	taken: boolean
}

export interface CreateHackathonTime {
	start: Date | null
	end: Date | null
}
