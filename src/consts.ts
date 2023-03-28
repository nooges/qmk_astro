export const SITE = {
	title: 'QMK Firmware',
	description: 'Documentation for working with QMK Firmware',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
	日本語: 'ja',
	简体中文: 'zh-cn'
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Tutorial': [
			{ text: 'Introduction', link: 'en/newbs' },
			{ text: 'Setup', link: 'en/newbs_getting_started' },
			{ text: 'Building Your First Firmware', link: 'en/newbs_building_firmware' },
			{ text: 'Flashing Firmware', link: 'en/newbs_flashing' },
			{ text: 'Getting Help/Support', link: 'en/support' },
		],
		'FAQs': [
			{ text: 'General FAQ', link: 'en/faq_general' },
			{ text: 'Build/Compile QMK', link: 'en/faq_build' },
			{ text: 'Troubleshooting QMK', link: 'en/faq_misc' },
			{ text: 'Debugging QMK', link: 'en/faq_debug' },
			{ text: 'Keymap FAQ', link: 'en/faq_keymap' },
		],
	},
	ja: {
		'チュートリアル': [
			{ text: '入門', link: 'ja/newbs' },
			{ text: 'セットアップ', link: 'ja/newbs_getting_started' },
			{ text: '初めてのファームウェアの構築', link: 'ja/newbs_building_firmware' },
			{ text: 'ファームウェアのフラッシュ', link: 'ja/newbs_flashing' },
			{ text: '手助けを得る/サポート', link: 'ja/support' },
		],
		'FAQ': [
			{ text: '一般的な FAQ', link: 'ja/faq_general' },
			{ text: 'QMK のビルド/コンパイル', link: 'ja/faq_build' },
			{ text: 'QMK のデバッグ', link: 'ja/faq_misc' },
			{ text: 'QMK のトラブルシューティング', link: 'ja/faq_debug' },
			{ text: 'キーマップ FAQ', link: 'ja/faq_keymap' },
		],
	},
};
