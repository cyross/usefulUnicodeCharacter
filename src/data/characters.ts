import { JsonDataMapInterface } from '@/types/jsonData';

// 合字のリスト
const ligaturesEnglish: string[] = [
  // 一般的なタイポグラフィ合字
  "fi",
  "fl",
  "ff",
  "ffi",
  "ffl",
  // ラテン系の特殊文字
  "æ", // ラテン語や古英語の「ash」
  "œ", // フランス語などで使用される「oe」
  // 中世英語や古英語で使われる合字
  "ǁ", // 歴史的な言語のマーク
  "ꜳ", // 合字aa（rare）
  "ꜵ", // 合字ao（rare）
  "ꜷ", // 合字au（rare）
  "ꜹ", // 合字av（rare）
  "ꜻ", // 合字ay（rare）
  // タイポグラフィの特殊デザイン
  "ſi", // "long s" と i の合字
  "ſl", // "long s" と l の合字
  // Unicodeで定義されているその他の合字
  "ﬀ", // ff
  "ﬁ", // fi
  "ﬂ", // fl
  "ﬃ", // ffi
  "ﬄ"  // ffl
];

// Unicodeでリング符号付き文字を列挙
const ringedCharacters: string[] = [
  "Å",  // Latin Capital Letter A with Ring Above
  "å",  // Latin Small Letter A with Ring Above
  "Ů",  // Latin Capital Letter U with Ring Above
  "ů",  // Latin Small Letter U with Ring Above
  "ẘ",  // Latin Small Letter W with Ring Above
  "ẙ",  // Latin Small Letter Y with Ring Above
  "Ǻ",  // Latin Capital Letter A with Ring Above and Acute
  "ǻ",  // Latin Small Letter A with Ring Above and Acute
];

function getArabicLetters(): string[] {
  const arabicRange = [
    // U+0600 to U+06FF (アラビア語基本文字)
    [0x0600, 0x06FF],
    // U+0750 to U+077F (アラビア語補助)
    [0x0750, 0x077F],
    // U+08A0 to U+08FF (アラビア語補助-2)
    [0x08A0, 0x08FF],
    // U+FB50 to U+FDFF (アラビア語合成文字)
    [0xFB50, 0xFDFF],
    // U+FE70 to U+FEFF (アラビア語合成文字-2)
    [0xFE70, 0xFEFF]
  ];

  let letters: string[] = [];

  arabicRange.forEach(([start, end]) => {
    for (let code = start; code <= end; code++) {
      letters.push(String.fromCharCode(code));
    }
  });

  return letters;
}

// 初声（Consonants）
const hangulInitialConsonants = [
  'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

// 母音（Vowels）
const hangulVowels = [
  'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
];

// 終声（Final Consonants）
const hangulFinalConsonants = [
  'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

const ipaSymbols: string[] = [
  // 子音
  "p", "b", "t", "d", "k", "g", "ʔ",
  "m", "n", "ŋ", 
  "ɸ", "β", "f", "v", "θ", "ð", "s", "z", "ʃ", "ʒ", "ʂ", "ʐ", "ç", "ʝ", "x", "ɣ", "χ", "ʁ", "ħ", "ʕ", "h", "ɦ",
  "ʋ", "ɹ", "ɻ", "j", "ʍ", "w", "ɰ",
  "l", "ɭ", "ʎ", "ʟ",
  // 母音
  "i", "y", "ɨ", "ʉ", "ɯ", "u",
  "ɪ", "ʏ", "ʊ",
  "e", "ø", "ɘ", "ɵ", "ɤ", "o",
  "ə", 
  "ɛ", "œ", "ɜ", "ɞ", "ʌ", "ɔ",
  "æ", "ɐ",
  "a", "ɶ", "ɑ", "ɒ",
  // 追加記号（補助記号）
  "ˈ", "ˌ", "ː", "ˑ", "ʼ", 
  "̩", "̯", "͡", "͜",
  // 声調記号
  "˥", "˦", "˧", "˨", "˩",
  // その他
  "ʘ", "ǀ", "ǃ", "ǂ", "ǁ"
];

const unitSymbolsBase: string[] = [
  // 長さ (Length)
  "m", // メートル
  "cm", // センチメートル
  "mm", // ミリメートル
  "km", // キロメートル
  "in", // インチ
  "ft", // フィート
  "yd", // ヤード
  "mi", // マイル
  "nm", // ナノメートル
  "Å", // オングストローム
  // 質量 (Mass)
  "g", // グラム
  "kg", // キログラム
  "mg", // ミリグラム
  "t", // トン
  "lb", // ポンド
  "oz", // オンス
  // 時間 (Time)
  "s", // 秒
  "ms", // ミリ秒
  "min", // 分
  "h", // 時間
  "d", // 日
  // 温度 (Temperature)
  "K", // ケルビン
  "°C", // 摂氏
  "°F", // 華氏
  // 電流 (Electric current)
  "A", // アンペア
  "mA", // ミリアンペア
  // 物質量 (Amount of substance)
  "mol", // モル
  // 光度 (Luminous intensity)
  "cd", // カンデラ
  // 面積 (Area)
  "m²", // 平方メートル
  "km²", // 平方キロメートル
  "cm²", // 平方センチメートル
  "mm²", // 平方ミリメートル
  "ha", // ヘクタール
  "acre", // エーカー
  // 体積 (Volume)
  "m³", // 立方メートル
  "cm³", // 立方センチメートル
  "L", // リットル
  "mL", // ミリリットル
  // 速度 (Speed)
  "m/s", // メートル毎秒
  "km/h", // キロメートル毎時
  "mph", // マイル毎時
  "kn", // ノット
  // 力 (Force)
  "N", // ニュートン
  // 圧力 (Pressure)
  "Pa", // パスカル
  "bar", // バール
  "atm", // 大気圧
  // エネルギー (Energy)
  "J", // ジュール
  "kJ", // キロジュール
  "cal", // カロリー
  "kcal", // キロカロリー
  "Wh", // ワット時
  "kWh", // キロワット時
  // 電荷 (Electric charge)
  "C", // クーロン
  // 電圧 (Electric potential)
  "V", // ボルト
  // 電力 (Power)
  "W", // ワット
  "kW", // キロワット
  // その他
  "rad", // ラジアン (角度)
  "°", // 度 (角度)
  "'", // 分 (角度)
  "\"", // 秒 (角度)
  "Hz", // ヘルツ (周波数)
  "Bq", // ベクレル (放射能)
  "Gy", // グレイ (放射線吸収線量)
  "Sv", // シーベルト (放射線線量当量)
  "lx", // ルクス (照度)
];

const unitSymbolsUnicode: string[] = [
  // 長さ
  "m",   // メートル (U+006D)
  "cm",  // センチメートル (U+0063 U+006D)
  "km",  // キロメートル (U+006B U+006D)
  "mm",  // ミリメートル (U+006D U+006D)
  // 重さ
  "kg",  // キログラム (U+006B U+0067)
  "g",   // グラム (U+0067)
  "mg",  // ミリグラム (U+006D U+0067)
  // 時間
  "s",   // 秒 (U+0073)
  "ms",  // ミリ秒 (U+006D U+0073)
  "min", // 分 (U+006D U+0069 U+006E)
  "h",   // 時 (U+0068)
  // 面積
  "m²",  // 平方メートル (U+006D U+00B2)
  "cm²", // 平方センチメートル (U+0063 U+006D U+00B2)
  // 体積
  "m³",  // 立方メートル (U+006D U+00B3)
  "L",   // リットル (U+004C)
  "mL",  // ミリリットル (U+006D U+004C)
  // 速度
  "m/s", // メートル毎秒 (U+006D U+002F U+0073)
  // 温度
  "°C",  // 摂氏 (U+00B0 U+0043)
  "°F",  // 華氏 (U+00B0 U+0046)
  "K",   // ケルビン (U+004B)
  // 圧力
  "Pa",  // パスカル (U+0050 U+0061)
  "atm", // 大気圧 (U+0061 U+0074 U+006D)
  // 電気
  "A",   // アンペア (U+0041)
  "V",   // ボルト (U+0056)
  "Ω",   // オーム (U+03A9)
  // 周波数
  "Hz",  // ヘルツ (U+0048 U+007A)
  // ジュール (エネルギー)
  "J",   // ジュール (U+004A)
  // 力
  "N",   // ニュートン (U+004E)
  // 仕事
  "W",   // ワット (U+0057)
  // 照度
  "lx",  // ルクス (U+006C U+0078)
  // その他
  "cd",  // カンデラ (U+0063 U+0064)
  // 数学記号（例: π）
  "π",   // パイ (U+03C0)
  "∞",   // 無限大 (U+221E)
];

// メートル法とポンドヤード法の単位記号（Unicode）
const unitsMetricPondYard: string[] = [
  // メートル法 (SI)
  'm',   // メートル
  'kg',  // キログラム
  's',   // 秒
  'A',   // アンペア
  'K',   // ケルビン
  'mol', // モル
  'cd',  // カンデラ
  '°C',  // 摂氏（ユニコード）
  'Pa',  // パスカル
  'N',   // ニュートン
  'J',   // ジュール
  'W',   // ワット
  'C',   // クーロン
  'V',   // ボルト
  'F',   // ファラッド
  'Ω',   // オーム
  'S',   // シーメンス
  'H',   // ヘンリー
  'T',   // テスラ
  'Bq',  // ベクレル
  'Gy',  // グレイ
  'Sv',  // シーベルト
  'lm',  // ルーメン
  'lx',  // ルクス
  'B',   // ベル
  'bit', // ビット
  'byte', // バイト
  // ポンドヤード法 (Imperial & US customary units)
  'ft',  // フィート
  'in',  // インチ
  'yd',  // ヤード
  'mi',  // マイル
  'lb',  // ポンド
  'oz',  // オンス
  'gal', // ガロン
  'qt',  // クォート
  'pt',  // パイント
  'cup', // カップ
  'tbsp', // 大さじ
  'tsp',  // 小さじ
  'floz', // 液量オンス
  // その他
  '°',   // 度（温度）
  '′',   // 分 (角度)
  '″',   // 秒 (角度)
  '°F',  // 摂氏温度（ユニコード）
  '°K',  // ケルビン温度（ユニコード）
  '‰',   // パーミル（千分率）
  '℉',   // 摂氏温度（シンボル）
  '℃',   // セルシウス記号
];

const unitSymbolsMetricPondYardNonSI: string[] = [
  // メートル法（SI単位）
  "m",      // メートル
  "kg",     // キログラム
  "s",      // 秒
  "A",      // アンペア
  "K",      // ケルビン
  "mol",    // モル
  "cd",     // カンデラ
  "m²",     // 平方メートル
  "m³",     // 立方メートル
  "km",     // キロメートル
  "cm",     // センチメートル
  "mm",     // ミリメートル
  "μm",     // マイクロメートル
  "nm",     // ナノメートル
  "pm",     // ピコメートル
  "fm",     // フェムトメートル
  "am",     // アトメートル
  "km²",    // 平方キロメートル
  "km³",    // 立方キロメートル
  "g",      // グラム
  "mg",     // ミリグラム
  "μg",     // マイクログラム
  "ng",     // ナノグラム
  "lb",     // ポンド（重量）
  "oz",     // オンス（重量）
  "ft",     // フィート
  "yd",     // ヤード
  "in",     // インチ
  // ポンドヤード法（Imperial単位）
  "st",     // ストーン（重量）
  "mi",     // マイル
  "gallon", // ガロン
  "quart",  // クォート
  "pint",   // パイント
  "fluid ounce", // フルードオンス
  "stone",  // ストーン（重量）
  // 非SI単位
  "Hz",     // ヘルツ（周波数）
  "N",      // ニュートン（力）
  "Pa",     // パスカル（圧力）
  "J",      // ジュール（エネルギー）
  "W",      // ワット（電力）
  "C",      // クーロン（電荷）
  "V",      // ボルト（電圧）
  "Ω",      // オーム（抵抗）
  "F",      // ファラッド（静電容量）
  "S",      // シーメンス（導電率）
  "H",      // ヘンリー（誘導）
  "T",      // テスラ（磁束密度）
  "Bq",     // ベクレル（放射能）
  "Gy",     // グレイ（吸収線量）
  "Sv",     // シーヴァート（線量当量）
  "kat",    // カタール（触媒活性）
  "cd",     // カンデラ（光度）
  "lumen",  // ルーメン（光束）
  "lux",    // ルクス（照度）
  // 追加の単位記号（他のシンボル）
  "°C",     // セルシウス（温度）
  "°F",     // 華氏（温度）
  "K",      // ケルビン（温度）
  "min",    // 分
  "h",      // 時間
  "day",    // 日
  "week",   // 週
  "month",  // 月
  "year",   // 年
  "byte",   // バイト
  "kb",     // キロバイト
  "mb",     // メガバイト
  "gb",     // ギガバイト
  "tb",     // テラバイト
  "bit",    // ビット
  "bps",    // ビット毎秒
  "rpm",    // 回転数
  "km/h",   // 時速キロメートル
  "m/s",    // メートル毎秒
  "mph",    // 時速マイル
];

const getUnitSymbols = () =>
  Array.from(new Set([...unitSymbolsBase, ...unitSymbolsUnicode, ...unitsMetricPondYard, ...unitSymbolsMetricPondYardNonSI]))

// SI基本単位記号の配列
const siBaseUnits: string[] = [
  'm',   // メートル
  'kg',  // キログラム
  's',   // 秒
  'A',   // アンペア
  'K',   // ケルビン
  'mol', // モル
  'cd',  // カンデラ
];

// SI接頭辞（プレフィックス）の配列
const siPrefixes: string[] = [
  'y',   // 10^-24
  'z',   // 10^-21
  'a',   // 10^-18
  'f',   // 10^-15
  'p',   // 10^-12
  'n',   // 10^-9
  'μ',   // 10^-6
  'm',   // 10^-3
  'c',   // 10^-2
  'd',   // 10^-1
  'da',  // 10^1
  'h',   // 10^2
  'k',   // 10^3
  'M',   // 10^6
  'G',   // 10^9
  'T',   // 10^12
  'P',   // 10^15
  'E',   // 10^18
  'Z',   // 10^21
  'Y',   // 10^24
];

// 非SI系単位の単位記号を列挙する配列
const nonSIUnits: string[] = [
  "ft",    // フィート
  "in",    // インチ
  "yd",    // ヤード
  "mi",    // マイル
  "lb",    // ポンド
  "oz",    // オンス
  "ton",   // トン（アメリカ）
  "°F",    // 華氏
  "°C",    // セ氏（SI外だが温度の単位として使われることが多い）
  "h",     // 時間
  "min",   // 分
  "s",     // 秒（SI単位に含まれるが、非SI系としても用いられることがある）
  "rpm",   // 回転数
  "bar",   // バール（圧力単位）
  "atm",   // 大気圧（大気圧単位）
  "l",     // リットル（体積の単位）
  "gal",   // ガロン（アメリカガロン、英国ガロン）
  "cu in", // 立方インチ
  "cu ft", // 立方フィート
  "kcal",  // キロカロリー
  "kWh",   // キロワット時
  "A·s",   // アンペア秒
  "Bq",    // ベクレル（放射線量の単位として使われる）
  "Gy",    // グレイ（放射線量の単位として使われる）
  "Sv",    // シーベルト（放射線量の単位として使われる）
];

const mathSymbols: string[] = [
  // 算術演算子
  '+', '-', '*', '/', '%', '=', '≠', '≡', '±', '×', '÷',
  // 比較演算子
  '>', '<', '≥', '≤', '≠', '≡',
  // 論理演算子
  '&&', '||', '!', '⊕', '⊗',
  // 組み合わせや順列
  '∑', '∏', 'C', 'P', '!', '∅',
  // 集合記号
  '∈', '∉', '⊂', '⊆', '⊄', '⊇', '∪', '∩', '∅',
  // 角度
  '°', '∠', '∡', '∟',
  // 関数記号
  'sin', 'cos', 'tan', 'log', 'ln', '√', '∛', 'π', 'e',
  // 無限記号
  '∞', '∝',
  // 集合の演算
  '∩', '∪', '⊕', '⊗',
  // 微分記号
  '∂', '∇',
  // 行列記号
  '⊥', '⊤',
  // 統計記号
  'μ', 'σ', 'Σ', 'Δ',
  // その他
  '≈', '≅', '∝', '∼', '≅'
];

const currencySymbolsAscii: string[] = [
  'USD', // 米ドル
  'EUR', // ユーロ
  'JPY', // 日本円
  'GBP', // 英ポンド
  'AUD', // オーストラリアドル
  'CAD', // カナダドル
  'CHF', // スイスフラン
  'CNY', // 中国元
  'SEK', // スウェーデンクローナ
  'NZD', // ニュージーランドドル
  'MXN', // メキシコペソ
  'SGD', // シンガポールドル
  'HKD', // 香港ドル
  'NOK', // ノルウェークローネ
  'KRW', // 韓国ウォン
  'INR', // インドルピー
  'RUB', // ロシアルーブル
  'BRL', // ブラジルレアル
  'ZAR', // 南アフリカランド
  'TRY', // トルコリラ
  'SAR', // サウジアラビアリヤール
  'AED', // アラブ首長国連邦ディルハム
  'THB', // タイバーツ
  'MYR', // マレーシアリンギット
  'IDR', // インドネシアルピア
  'PHP', // フィリピンペソ
  'PLN', // ポーランドズウォティ
  'HUF', // ハンガリーフォリント
  'KRW', // 韓国ウォン
  'CLP', // チリペソ
  'COP', // コロンビアペソ
  'DKK', // デンマーククローネ
  'CZK', // チェココルナ
  'ILS', // イスラエルシェケル
  'BHD', // バーレーンディナール
  'KWD', // クウェートディナール
  'QAR', // カタールリヤール
  'EGP', // エジプトポンド
  'VND', // ベトナムドン
  'COP', // コロンビアペソ
  'ARS', // アルゼンチンペソ
  'LKR', // スリランカルピー
  'PEN', // ペルーノヴェ
  'NGN', // ナイジェリアナイラ
  'KES', // ケニアシリング
  'BND', // ブルネイドル
  'RSD', // セルビアディナール
];

const currencySymbolsUnicode: string[] = [
  "€",  // Euro (U+20AC)
  "₣",  // French Franc (U+20A3)
  "₿",  // Bitcoin (U+20BF)
  "₱",  // Philippine Peso (U+20B1)
  "₹",  // Indian Rupee (U+20B9)
  "¥",  // Yen (U+00A5)
  "₤",  // Lira (U+20A4)
  "$",  // Dollar (U+0024)
  "₭",  // Kip (U+20AD)
  "₨",  // Rupee (U+20A8)
  "₼",  // Azerbaijani Manat (U+20BC)
  "₰",  // German Penny (U+20B0)
  "₮",  // Tugrik (U+20AE)
  "₫",  // Dong (U+20AB)
  "៛",  // Cambodian Riel (U+17DB)
  "₴",  // Hryvnia (U+20B4)
  "₧",  // Peseta (U+20A7)
  "₩",  // Won (U+20A9)
  "₪",  // New Shekel (U+20AA)
  "₼",  // Azerbaijani Manat (U+20BC)
  "₽",  // Russian Ruble (U+20BD)
  "₻",  // Roman (U+20BB)
  "₽",  // Russian Ruble (U+20BD)
  "₾",  // Georgian Lari (U+20BE)
  "₹",  // Brazilian Real (U+20B9)
];

export const characterData: JsonDataMapInterface = {
  "ラテン文字(基本)": [
    "A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z",
  ],
  "ウムラウト・トレマ": [
    "Ä","ä","Ǟ","ǟ","Ï","ï","Ḯ","ḯ","Ü","ü","Ǖ","ǖ","Ǘ","ǘ","Ǚ","ǚ","Ǖ","ǜ","Ṳ","ṳ","Ṻ","ṻ","Ë","ë","Ö","ö","Ȫ","ȫ","Ḧ","ḧ","ẗ","Ẅ","ẅ","Ẍ","ẍ","Ÿ","ÿ",
  ],
  "アキュート・アクセント": [
    "Á","á","Ǻ","ǻ","Ǽ","ǽ","Ấ","ấ","Ắ","ắ","Ć","ć","Ḉ","ḉ","É","é","Ḗ","ḗ","Ế","ế","Ǵ","ǵ","Í","í","Ḯ","ḯ","Ḱ","ḱ","Ĺ","ĺ","Ḿ","ḿ","Ń","ń","Ó","ó","Ǿ","ǿ","Ố","ố","Ớ","ớ","Ṍ","ṍ","Ṓ","ṓ","Ṕ","ṕ","Ŕ","ŕ","Ś","ś","Ṥ","ṥ","Ú","ú","Ǘ","ǘ","Ứ","ứ","Ṹ","ṹ","Ẃ","ẃ","Ý","ý","Ź","ź",
  ],
  "グレイヴ・アクセント": [
    "À","à","Ầ","ầ","Ằ","ằ","È","è","Ề","ề","Ḕ","ḕ","Ì","ì","Ǹ","ǹ","Ò","ò","Ồ","ồ","Ờ","ờ","Ṑ","ṑ","Ù","ù","Ǜ","ǜ","Ừ","ừ","Ẁ","ẁ","Ỳ","ỳ",
  ],
  "サーカム・フレックス": [
    "Â","â","Ấ","ấ","Ầ","ầ","Ẩ","ẩ","Ẫ","ẫ","Ậ","ậ","Ĉ","ĉ","Ê","ê","Ế","ế","Ề","ề","Ể","ể","Ễ","ễ","Ệ","ệ","Ĝ","ĝ","Ĥ","ĥ","Î","î","Ĵ","ĵ","Ô","ô","Ố","ố","Ồ","ồ","Ổ","ổ","Ỗ","ỗ","Ộ","ộ","Ŝ","ŝ","Û","û","Ŵ","ŵ","Ŷ","ŷ","Ẑ","ẑ",
  ],
  "セディーユ": [
    "Ç","ç","Ḉ","ḉ","Ḑ","ḑ","Ȩ","ȩ","Ḝ","ḝ","Ģ","ģ","Ḩ","ḩ","Ķ","ķ","Ļ","ļ","Ņ","ņ","Ŗ","ŗ","Ş","ş","Ţ","ţ",
  ],
  "ティルデ": [
    "Ã","ã","Ẫ","ẫ","Ẵ","ẵ","Ẽ","ẽ","Ễ","ễ","Ĩ","ĩ","Ɫ","ɫ","Ñ","ñ","Õ","õ","Ỗ","ỗ","Ỡ","ỡ","Ȭ","ȭ","Ṍ","ṍ","Ṏ","ṏ","Ũ","ũ","Ữ","ữ","Ṹ","ṹ","Ṽ","ṽ","Ỹ","ỹ",
  ],
  "オゴネク": [
    "Ą","ą","Ę","ę","Į","į","Ų","ų","Ǫ","ǫ","Ǭ","ǭ",
  ],
  "キリル文字": [
    "А","а","Ӓ","ä","Ӑ","ӑ","Ӕ","ӕ","Б","б","В","в","Г","г","Ѓ","ѓ","Ғ","ғ","Ӻ","ӻ","Ґ","ґ","Ҕ","ҕ","Ӷ","ӷ","Д","д","Ԭ","ԭ","Ꚉ","ꚉ","Ԫ","ԫ","Ꙣ","ꙣ","Ԁ","ԁ","Ђ","ђ","Ԃ","ԃ","Е","е","Ѐ","ѐ","Ё","ё","Ӗ","ӗ","Ә","ә","Ӛ","ӛ","Є","є","Ж","ж","Ӂ","ӂ","Ӝ","ӝ","Җ","җ","Ꚅ","ꚅ","Ӡ","ӡ","Ԇ","ԇ","Ѕ","ѕ","Ꙅ","ꙅ","Ꙃ","ꙃ","З","з","Ꙁ","ꙁ","Ԅ","ԅ","Ӟ","ӟ","Ҙ","ҙ","Ԑ","ԑ","И","и","Ѝ","ѝ","Ӥ","ӥ","Й","й","Ӣ","ӣ","Ҋ","ҋ","Ѳ","ѳ","І","і","Ї","ї","Ꙇ","ꙇ","Ј","ј","Ꙉ","ꙉ","К","к","Ҟ","ҟ","Ӄ","ӄ","Ҝ","ҝ","Ҡ","ҡ","Ќ","ќ","Қ","қ","Ԟ","ԟ","Л","л","Ԡ","ԡ","Ԓ","ԓ","Љ","љ","Ꙥ","ꙥ","Ԉ","ԉ","Ԕ","ԕ","Ԯ","ԯ","Ӆ","ӆ","М","м","Ӎ","ӎ","Ꙧ","ꙧ","Н","н","Ң","ң","Ҥ","ҥ","Ӈ","ӈ","Ԣ","ԣ","Њ","њ","Ԋ","ԋ","Ԩ","ԩ","Ӊ","ӊ","Һ","һ","Ԧ","ԧ","Ꚕ","ꚕ","Ѯ","ѯ","О","о","Ꙩ","ꙩ","Ꙫ","ꙫ","Ꙭ","ꙭ","ꙮ","Ꚙ","ꚙ","Ꚛ","ꚛ","Ѻ","ѻ","Ѹ","ѹ","Ꙋ","ꙋ","Ӧ","ӧ","Ө","ө","Ӫ","ӫ","П","п","Ҧ","ҧ","Ԥ","ԥ","Ҁ","ҁ","Р","р","Ҏ","ҏ","Ԗ","ԗ","С","с","Ҫ","ҫ","Ԍ","ԍ","Т","т","Ԏ","ԏ","Ꚍ","ꚍ","Ҭ","ҭ","Ꚋ","ꚋ","Ћ","ћ","Ꚑ","ꚑ","У","у","Ӱ","ӱ","Ў","ў","Ӯ","ӯ","Ӳ","ӳ","Ү","ү","Ұ","ұ","Ф","ф","Х","х","Ӽ","ӽ","Ӿ","ӿ","Ҳ","ҳ","Ѱ","ѱ","Ѡ","ѡ","Ѽ","ѽ","Ꙍ","ꙍ","Ѿ","ѿ","Ц","ц","Ҵ","ҵ","Ꙡ","ꙡ","Ꚏ","ꚏ","Ч","ч","Ҷ","ҷ","Ҹ","ҹ","Ӵ","ӵ","Ӌ","ӌ","Ҩ","ҩ","Ҽ","ҽ","Ꚇ","ꚇ","Ҿ","ҿ","Џ","џ","Ш","ш","Ꚗ","ꚗ","Щ","щ","Ъ","ъ","Ы","ы","Ꙑ","ꙑ","Ӹ ","ӹ","Ь","ь","Ҍ","ҍ","Ꙏ","ꙏ","Ѣ","ѣ","Ꙓ","ꙓ","Э","э","Ӭ","ӭ","Ю","ю","Ꙕ","ꙕ","Ꙗ","ꙗ","Я","я","Ԙ","ԙ","Ѥ","ѥ","Ԛ","ԛ","Ԝ","ԝ","Ӏ","ӏ","Ѧ","ѧ","Ѩ","ѩ","Ѫ","ѫ","Ѭ","ѭ","Ꙙ","ꙙ","Ꙛ","ꙛ","Ꙝ","ꙝ","Ꙟ","ꙟ","ⷽ","ⷾ","ⷿ",
  ],
  "ギリシャ文字": [
    "Α","α","Β","β","Γ","γ","Δ","δ","Ε","ε","Ζ","ζ","Η","η","Θ","θ","Ι","ι","Κ","κ","Λ","λ","Μ","μ","Ν","ν","Ξ","ξ","Ο","ο","Π","π","Ρ","ρ","∑","σ","Τ","τ","Υ","υ","Φ","φ","Χ","χ","Ψ","ψ","Ω","ω",
  ],
  "リング符号付き": ringedCharacters,
  "アラビア文字": getArabicLetters,
  "ハングル(初声)": hangulInitialConsonants,
  "ハングル(母音)": hangulVowels,
  "ハングル(終声)": hangulFinalConsonants,
  "発音記号": ipaSymbols,
  "合字": ligaturesEnglish,
  "ルーン文字": [
    "ᚠ","ᚢ","ᚣ","ᚤ","ᚦ","ᚨ","ᚩ","ᚪ","ᚫ","ᚬ","ᚭ","ᚱ","ᚲ","ᚳ","ᚴ","ᚷ","ᚷ","ᚸ","ᚹ","ᚺ","ᚻ","ᚼ","ᚽ","ᚾ","ᛁ","ᛃ","ᛡ","ᛄ","ᛡ","ᛅ","ᛆ","ᛇ","ᛈ","ᛉ","ᛦ","ᛧ","ᛨ","ᛊ","ᛋ","ᛌ","ᛏ","ᛏ","ᛐ","ᛒ","ᛒ","ᛓ","ᛖ","ᛗ","ᛘ","ᛙ","ᛚ","ᛜ","ᛝ","ᛟ","ᛞ","ᛠ","ᛢ","ᛣ","ᛥ","ᚸ",
  ],
  "ルーン文字由来": [
    "Ð","ð","Þ","þ","ᚦ",
  ],
  "SI系単位": [...siBaseUnits, ...siPrefixes],
  "非SI系単位": nonSIUnits,
  "単位記号": getUnitSymbols,
  "数学記号": mathSymbols,
  "通貨単位": [...currencySymbolsAscii, ...currencySymbolsUnicode],
} as const;
