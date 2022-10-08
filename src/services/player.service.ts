import { PlaybackState, Devices } from '@/models';
import { baseApi } from './base.service';

export const playerApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getPlaybackState: builder.mutation<PlaybackState, void>({
			query: () => ({
				url: '/player',
				method: 'GET',
			}),
		}),

		setPlaybackDevice: builder.mutation<void, { device_ids: Array<string> }>({
			query: devices => ({
				url: '/player',
				method: 'PUT',
				body: devices,
			}),
		}),

		setPlaybackPlay: builder.mutation<void, void>({
			query: () => ({
				url: '/player/play',
				method: 'PUT',
			}),
		}),

		setPlaybackPause: builder.mutation<void, void>({
			query: () => ({
				url: '/player/pause',
				method: 'PUT',
			}),
		}),

		setPlaybackRepeat: builder.mutation<void, void>({
			query: () => ({
				url: '/player/repeat',
				method: 'PUT',
			}),
		}),

		setPlaybackNext: builder.mutation<void, void>({
			query: () => ({
				url: '/player/next',
				method: 'POST',
			}),
		}),

		setPlaybackPrevious: builder.mutation<void, void>({
			query: () => ({
				url: '/player/previous',
				method: 'POST',
			}),
		}),

		setPlaybackSeek: builder.mutation<void, number>({
			query: positionMs => ({
				url: '/player/seek',
				method: 'PUT',
				body: { position_ms: positionMs },
			}),
		}),

		setPlaybackShuffle: builder.mutation<void, boolean>({
			query: shuffle => ({
				url: '/player/shuffle',
				method: 'PUT',
				body: { state: shuffle },
			}),
		}),

		setPlaybackVolume: builder.mutation<void, number>({
			query: volumePercent => ({
				url: '/player/volume',
				method: 'PUT',
				body: { volume_percent: volumePercent },
			}),
		}),

		getPlaybackDevices: builder.mutation<Devices, void>({
			query: () => ({
				url: '/player/devices',
				method: 'GET',
			}),
		}),
	}),
});

export const {
	useGetPlaybackStateMutation,
	useSetPlaybackDeviceMutation,
	useSetPlaybackPlayMutation,
	useSetPlaybackPauseMutation,
	useSetPlaybackRepeatMutation,
	useSetPlaybackNextMutation,
	useSetPlaybackPreviousMutation,
	useSetPlaybackSeekMutation,
	useSetPlaybackShuffleMutation,
	useSetPlaybackVolumeMutation,
	useGetPlaybackDevicesMutation,
} = playerApi;
