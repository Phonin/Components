/**
 * @name getGetStyleFunc
 * @description things
 * @source https://github.com/0J3/mozAlike/blob/main/getStyle.tsx
 * @author 0J3
 * @param style string
 * @returns (t:string)=>string
 */
export const getGetStyleFunc = (style: any) => {
  const getStyle = (t: string) => {
    const styles: string[] = t.split(' ');
    const stylelist: string[] = [];
    styles.forEach((st: string) => {
      stylelist.push(style[st] || `WARN_STYLE_${st}_NOTDEFINEDINSTYLESLIST`);
    });
    return `s_${styles.join(' s_')} ${stylelist.join(' ')}`;
  };
  return getStyle;
};
export default getGetStyleFunc;
