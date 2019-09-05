import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.8,
  headerFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Avenir',
    'Avenir Next',
    'Hiragino Sans',
    'ヒラギノ角ゴシック',
    'ヒラギノ角ゴ ProN W3',
    'メイリオ',
    'Meiryo',
    'Roboto',
    'sans-serif'
  ],
  bodyFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Avenir',
    'Avenir Next',
    'Hiragino Sans',
    'ヒラギノ角ゴシック',
    'ヒラギノ角ゴ ProN W3',
    'メイリオ',
    'Meiryo',
    'Roboto',
    'sans-serif'
  ]
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
