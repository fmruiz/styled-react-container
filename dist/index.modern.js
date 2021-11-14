import { createElement } from 'react';
import styled from 'styled-components';

let _ = t => t,
    _t;
const Container = styled.div(_t || (_t = _`
  /* width */
  width: ${0};
  /* height */
  height: ${0};
  /* display */
  display: ${0};
  /* flex-direction */
  flex-direction: ${0};
  /* align-items */
  align-items: ${0};
  /* margin */
  margin: ${0};
  margin-top: ${0};
  margin-left: ${0};
  margin-right: ${0};
  margin-bottom: ${0};
  /* padding */
  padding: ${0};
  padding-top: ${0};
  padding-left: ${0};
  padding-right: ${0};
  padding-bottom: ${0};

  @media (min-width: 414px) {
    /* width */
    width: ${0};
    /* height */
    height: ${0};
    /* display */
    display: ${0};
    /* flex-direction */
    flex-direction: ${0};
    /* align-items */
    align-items: ${0};
    /* margin */
    margin: ${0};
    margin-top: ${0};
    margin-left: ${0};
    margin-right: ${0};
    margin-bottom: ${0};
    /* padding */
    padding: ${0};
    padding-top: ${0};
    padding-left: ${0};
    padding-right: ${0};
    padding-bottom: ${0};
  }

  @media (min-width: 600px) {
    /* width */
    width: ${0};
    /* height */
    height: ${0};
    /* display */
    display: ${0};
    /* flex-direction */
    flex-direction: ${0};
    /* align-items */
    align-items: ${0};
    /* margin */
    margin: ${0};
    margin-top: ${0};
    margin-left: ${0};
    margin-right: ${0};
    margin-bottom: ${0};
    /* padding */
    padding: ${0};
    padding-top: ${0};
    padding-left: ${0};
    padding-right: ${0};
    padding-bottom: ${0};
  }

  @media (min-width: 768px) {
    /* width */
    width: ${0};
    /* height */
    height: ${0};
    /* display */
    display: ${0};
    /* flex-direction */
    flex-direction: ${0};
    /* align-items */
    align-items: ${0};
    /* margin */
    margin: ${0};
    margin-top: ${0};
    margin-left: ${0};
    margin-right: ${0};
    margin-bottom: ${0};
    /* padding */
    padding: ${0};
    padding-top: ${0};
    padding-left: ${0};
    padding-right: ${0};
    padding-bottom: ${0};
  }

  @media (min-width: 992px) {
    /* width */
    width: ${0};
    /* height */
    height: ${0};
    /* display */
    display: ${0};
    /* flex-direction */
    flex-direction: ${0};
    /* align-items */
    align-items: ${0};
    /* margin */
    margin: ${0};
    margin-top: ${0};
    margin-left: ${0};
    margin-right: ${0};
    margin-bottom: ${0};
    /* padding */
    padding: ${0};
    padding-top: ${0};
    padding-left: ${0};
    padding-right: ${0};
    padding-bottom: ${0};
  }

  @media (min-width: 1200px) {
    /* width */
    width: ${0};
    /* height */
    height: ${0};
    /* display */
    display: ${0};
    /* flex-direction */
    flex-direction: ${0};
    /* align-items */
    align-items: ${0};
    /* margin */
    margin: ${0};
    margin-top: ${0};
    margin-left: ${0};
    margin-right: ${0};
    margin-bottom: ${0};
    /* padding */
    padding: ${0};
    padding-top: ${0};
    padding-left: ${0};
    padding-right: ${0};
    padding-bottom: ${0};
  }

  @media (min-width: 1440px) {
    /* width */
    width: ${0};
    /* height */
    height: ${0};
    /* display */
    display: ${0};
    /* flex-direction */
    flex-direction: ${0};
    /* align-items */
    align-items: ${0};
    /* margin */
    margin: ${0};
    margin-top: ${0};
    margin-left: ${0};
    margin-right: ${0};
    margin-bottom: ${0};
    /* padding */
    padding: ${0};
    padding-top: ${0};
    padding-left: ${0};
    padding-right: ${0};
    padding-bottom: ${0};
  }

  @media (min-width: 1920px) {
    /* width */
    width: ${0};
    /* height */
    height: ${0};
    /* display */
    display: ${0};
    /* flex-direction */
    flex-direction: ${0};
    /* align-items */
    align-items: ${0};
    /* margin */
    margin: ${0};
    margin-top: ${0};
    margin-left: ${0};
    margin-right: ${0};
    margin-bottom: ${0};
    /* padding */
    padding: ${0};
    padding-top: ${0};
    padding-left: ${0};
    padding-right: ${0};
    padding-bottom: ${0};
  }
`), p => p.width ? p.width : 'auto', p => p.height ? p.height : 'auto', p => p.display ? p.display : 'block', p => p.flexDirection ? p.flexDirection : '', p => p.alignItems ? p.alignItems : '', p => p.margin ? p.margin : '0px', p => p.mt ? p.mt : '0px', p => p.ml ? p.ml : '0px', p => p.mr ? p.mr : '0px', p => p.mb ? p.mb : '0px', p => p.padding ? p.padding : '0px', p => p.pt ? p.pt : '0px', p => p.pl ? p.pl : '0px', p => p.pr ? p.pr : '0px', p => p.pb ? p.pb : '0px', p => p.w_414 ? p.w_414 : p.width, p => p.h_414 ? p.h_414 : p.height, p => p.d_414 ? p.d_414 : p.display, p => p.fd_414 ? p.fd_414 : p.flexDirection, p => p.alignItems_414 ? p.alignItems_414 : p.alignItems, p => p.m_414 ? p.m_414 : p.margin, p => p.mt_414 ? p.mt_414 : p.mt, p => p.ml_414 ? p.ml_414 : p.ml, p => p.mr_414 ? p.mr_414 : p.mr, p => p.mb_414 ? p.mb_414 : p.mb, p => p.p_414 ? p.p_414 : p.padding, p => p.pt_414 ? p.pt_414 : p.pt, p => p.pl_414 ? p.pl_414 : p.pl, p => p.pr_414 ? p.pr_414 : p.pr, p => p.pb_414 ? p.pb_414 : p.pb, p => p.w_600 ? p.w_600 : p.w_414, p => p.h_600 ? p.h_600 : p.h_414, p => p.d_600 ? p.d_600 : p.d_414, p => p.fd_600 ? p.fd_600 : p.fd_414, p => p.alignItems_600 ? p.alignItems_600 : p.alignItems_414, p => p.m_600 ? p.m_600 : p.m_414, p => p.mt_600 ? p.mt_600 : p.mt_414, p => p.ml_600 ? p.ml_600 : p.ml_414, p => p.mr_600 ? p.mr_600 : p.mr_414, p => p.mb_600 ? p.mb_600 : p.mb_414, p => p.p_600 ? p.p_600 : p.p_414, p => p.pt_600 ? p.pt_600 : p.pt_414, p => p.pl_600 ? p.pl_600 : p.pl_414, p => p.pr_600 ? p.pr_600 : p.pr_414, p => p.pb_600 ? p.pb_600 : p.pb_414, p => p.w_768 ? p.w_768 : p.w_600, p => p.h_768 ? p.h_768 : p.h_600, p => p.d_768 ? p.d_768 : p.d_600, p => p.fd_768 ? p.fd_768 : p.fd_600, p => p.alignItems_768 ? p.alignItems_768 : p.alignItems_600, p => p.m_768 ? p.m_768 : p.m_600, p => p.mt_768 ? p.mt_768 : p.mt_600, p => p.ml_768 ? p.ml_768 : p.ml_600, p => p.mr_768 ? p.mr_768 : p.mr_600, p => p.mb_768 ? p.mb_768 : p.mb_600, p => p.p_768 ? p.p_768 : p.p_600, p => p.pt_768 ? p.pt_768 : p.pt_600, p => p.pl_768 ? p.pl_768 : p.pl_600, p => p.pr_768 ? p.pr_768 : p.pr_600, p => p.pb_768 ? p.pb_768 : p.pb_600, p => p.w_992 ? p.w_992 : p.w_768, p => p.h_992 ? p.h_992 : p.h_768, p => p.d_992 ? p.d_992 : p.d_768, p => p.fd_992 ? p.fd_992 : p.fd_768, p => p.alignItems_992 ? p.alignItems_992 : p.alignItems_768, p => p.m_992 ? p.m_992 : p.m_768, p => p.mt_992 ? p.mt_992 : p.mt_768, p => p.ml_992 ? p.ml_992 : p.ml_768, p => p.mr_992 ? p.mr_992 : p.mr_768, p => p.mb_992 ? p.mb_992 : p.mb_768, p => p.p_992 ? p.p_992 : p.p_768, p => p.pt_992 ? p.pt_992 : p.pt_768, p => p.pl_992 ? p.pl_992 : p.pl_768, p => p.pr_992 ? p.pr_992 : p.pr_768, p => p.pb_992 ? p.pb_992 : p.pb_768, p => p.w_1200 ? p.w_1200 : p.w_992, p => p.h_1200 ? p.h_1200 : p.h_992, p => p.d_1200 ? p.d_1200 : p.d_992, p => p.fd_1200 ? p.fd_1200 : p.fd_992, p => p.alignItems_1200 ? p.alignItems_1200 : p.alignItems_992, p => p.m_1200 ? p.m_1200 : p.m_992, p => p.mt_1200 ? p.mt_1200 : p.mt_992, p => p.ml_1200 ? p.ml_1200 : p.ml_992, p => p.mr_1200 ? p.mr_1200 : p.mr_992, p => p.mb_992 ? p.mb_992 : p.mb_768, p => p.p_1200 ? p.p_1200 : p.p_992, p => p.pt_1200 ? p.pt_1200 : p.pt_992, p => p.pl_1200 ? p.pl_1200 : p.pl_992, p => p.pr_1200 ? p.pr_1200 : p.pr_992, p => p.pb_992 ? p.pb_992 : p.pb_768, p => p.w_1440 ? p.w_1440 : p.w_1200, p => p.h_1440 ? p.h_1440 : p.h_1200, p => p.d_1440 ? p.d_1440 : p.d_1200, p => p.fd_1440 ? p.fd_1440 : p.fd_1200, p => p.alignItems_1440 ? p.alignItems_1440 : p.alignItems_1200, p => p.m_1440 ? p.m_1440 : p.m_1200, p => p.mt_1440 ? p.mt_1440 : p.mt_1200, p => p.ml_1440 ? p.ml_1440 : p.ml_1200, p => p.mr_1440 ? p.mr_1440 : p.mr_1200, p => p.mb_1440 ? p.mb_1440 : p.mb_1200, p => p.p_1440 ? p.p_1440 : p.p_1200, p => p.pt_1440 ? p.pt_1440 : p.pt_1200, p => p.pl_1440 ? p.pl_1440 : p.pl_1200, p => p.pr_1440 ? p.pr_1440 : p.pr_1200, p => p.pb_1440 ? p.pb_1440 : p.pb_1200, p => p.w_1920 ? p.w_1920 : p.w_1440, p => p.h_1920 ? p.h_1920 : p.h_1440, p => p.d_1920 ? p.d_1920 : p.d_1440, p => p.fd_1920 ? p.fd_1920 : p.fd_1440, p => p.alignItems_1920 ? p.alignItems_1920 : p.alignItems_1440, p => p.m_1920 ? p.m_1920 : p.m_1440, p => p.mt_1920 ? p.mt_1920 : p.mt_1440, p => p.ml_1920 ? p.ml_1920 : p.ml_1440, p => p.mr_1920 ? p.mr_1920 : p.mr_1440, p => p.mb_1920 ? p.mb_1920 : p.mb_1440, p => p.p_1920 ? p.p_1920 : p.p_1440, p => p.pt_1920 ? p.pt_1920 : p.pt_1440, p => p.pl_1920 ? p.pl_1920 : p.pl_1440, p => p.pr_1920 ? p.pr_1920 : p.pr_1440, p => p.pb_1920 ? p.pb_1920 : p.pb_1440);

const StyledContainer = ({
  children,
  width,
  w_414,
  w_600,
  w_768,
  w_992,
  w_1200,
  w_1440,
  w_1920,
  height,
  h_414,
  h_600,
  h_768,
  h_992,
  h_1200,
  h_1440,
  h_1920,
  display,
  d_414,
  d_600,
  d_768,
  d_992,
  d_1200,
  d_1440,
  d_1920,
  flexDirection,
  fd_414,
  fd_600,
  fd_768,
  fd_992,
  fd_1200,
  fd_1440,
  fd_1920,
  alignItems,
  alignItems_414,
  alignItems_600,
  alignItems_768,
  alignItems_992,
  alignItems_1200,
  alignItems_1440,
  alignItems_1920,
  margin,
  m_414,
  m_600,
  m_768,
  m_992,
  m_1200,
  m_1440,
  m_1920,
  mt,
  mt_414,
  mt_600,
  mt_768,
  mt_992,
  mt_1200,
  mt_1440,
  mt_1920,
  ml,
  ml_414,
  ml_600,
  ml_768,
  ml_992,
  ml_1200,
  ml_1440,
  ml_1920,
  mr,
  mr_414,
  mr_600,
  mr_768,
  mr_992,
  mr_1200,
  mr_1440,
  mr_1920,
  mb,
  mb_414,
  mb_600,
  mb_768,
  mb_992,
  mb_1200,
  mb_1440,
  mb_1920,
  padding,
  p_414,
  p_600,
  p_768,
  p_992,
  p_1200,
  p_1440,
  p_1920,
  pt,
  pt_414,
  pt_600,
  pt_768,
  pt_992,
  pt_1200,
  pt_1440,
  pt_1920,
  pl,
  pl_414,
  pl_600,
  pl_768,
  pl_992,
  pl_1200,
  pl_1440,
  pl_1920,
  pr,
  pr_414,
  pr_600,
  pr_768,
  pr_992,
  pr_1200,
  pr_1440,
  pr_1920,
  pb,
  pb_414,
  pb_600,
  pb_768,
  pb_992,
  pb_1200,
  pb_1440,
  pb_1920
}) => {
  return createElement(Container, {
    width: width,
    w_414: w_414,
    w_600: w_600,
    w_768: w_768,
    w_992: w_992,
    w_1200: w_1200,
    w_1440: w_1440,
    w_1920: w_1920,
    height: height,
    h_414: h_414,
    h_600: h_600,
    h_768: h_768,
    h_992: h_992,
    h_1200: h_1200,
    h_1440: h_1440,
    h_1920: h_1920,
    display: display,
    d_414: d_414,
    d_600: d_600,
    d_768: d_768,
    d_992: d_992,
    d_1200: d_1200,
    d_1440: d_1440,
    d_1920: d_1920,
    flexDirection: flexDirection,
    fd_414: fd_414,
    fd_600: fd_600,
    fd_768: fd_768,
    fd_992: fd_992,
    fd_1200: fd_1200,
    fd_1440: fd_1440,
    fd_1920: fd_1920,
    alignItems: alignItems,
    alignItems_414: alignItems_414,
    alignItems_600: alignItems_600,
    alignItems_768: alignItems_768,
    alignItems_992: alignItems_992,
    alignItems_1200: alignItems_1200,
    alignItems_1440: alignItems_1440,
    alignItems_1920: alignItems_1920,
    margin: margin,
    m_414: m_414,
    m_600: m_600,
    m_768: m_768,
    m_992: m_992,
    m_1200: m_1200,
    m_1440: m_1440,
    m_1920: m_1920,
    mt: mt,
    mt_414: mt_414,
    mt_600: mt_600,
    mt_768: mt_768,
    mt_992: mt_992,
    mt_1200: mt_1200,
    mt_1440: mt_1440,
    mt_1920: mt_1920,
    ml: ml,
    ml_414: ml_414,
    ml_600: ml_600,
    ml_768: ml_768,
    ml_992: ml_992,
    ml_1200: ml_1200,
    ml_1440: ml_1440,
    ml_1920: ml_1920,
    mr: mr,
    mr_414: mr_414,
    mr_600: mr_600,
    mr_768: mr_768,
    mr_992: mr_992,
    mr_1200: mr_1200,
    mr_1440: mr_1440,
    mr_1920: mr_1920,
    mb: mb,
    mb_414: mb_414,
    mb_600: mb_600,
    mb_768: mb_768,
    mb_992: mb_992,
    mb_1200: mb_1200,
    mb_1440: mb_1440,
    mb_1920: mb_1920,
    padding: padding,
    p_414: p_414,
    p_600: p_600,
    p_768: p_768,
    p_992: p_992,
    p_1200: p_1200,
    p_1440: p_1440,
    p_1920: p_1920,
    pt: pt,
    pt_414: pt_414,
    pt_600: pt_600,
    pt_768: pt_768,
    pt_992: pt_992,
    pt_1200: pt_1200,
    pt_1440: pt_1440,
    pt_1920: pt_1920,
    pl: pl,
    pl_414: pl_414,
    pl_600: pl_600,
    pl_768: pl_768,
    pl_992: pl_992,
    pl_1200: pl_1200,
    pl_1440: pl_1440,
    pl_1920: pl_1920,
    pr: pr,
    pr_414: pr_414,
    pr_600: pr_600,
    pr_768: pr_768,
    pr_992: pr_992,
    pr_1200: pr_1200,
    pr_1440: pr_1440,
    pr_1920: pr_1920,
    pb: pb,
    pb_414: pb_414,
    pb_600: pb_600,
    pb_768: pb_768,
    pb_992: pb_992,
    pb_1200: pb_1200,
    pb_1440: pb_1440,
    pb_1920: pb_1920
  }, "Example Component: ", children);
};

export { StyledContainer };
//# sourceMappingURL=index.modern.js.map
