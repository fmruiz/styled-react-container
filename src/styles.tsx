import styled from 'styled-components'
import { SRCProps } from './types'

export const Container = styled.div<SRCProps>`
  /* width */
  width: ${(p) => (p.width ? p.width : 'auto')};
  /* height */
  height: ${(p) => (p.height ? p.height : 'auto')};
  /* display */
  display: ${(p) => (p.display ? p.display : 'block')};
  /* flex-direction */
  flex-direction: ${(p) => (p.flexDirection ? p.flexDirection : '')};
  /* align-items */
  align-items: ${(p) => (p.alignItems ? p.alignItems : '')};
  /* margin */
  margin: ${(p) => (p.margin ? p.margin : '0px')};
  margin-top: ${(p) => (p.mt ? p.mt : '0px')};
  margin-left: ${(p) => (p.ml ? p.ml : '0px')};
  margin-right: ${(p) => (p.mr ? p.mr : '0px')};
  margin-bottom: ${(p) => (p.mb ? p.mb : '0px')};
  /* padding */
  padding: ${(p) => (p.padding ? p.padding : '0px')};
  padding-top: ${(p) => (p.pt ? p.pt : '0px')};
  padding-left: ${(p) => (p.pl ? p.pl : '0px')};
  padding-right: ${(p) => (p.pr ? p.pr : '0px')};
  padding-bottom: ${(p) => (p.pb ? p.pb : '0px')};

  @media (min-width: 414px) {
    /* width */
    width: ${(p) => (p.w_414 ? p.w_414 : p.width)};
    /* height */
    height: ${(p) => (p.h_414 ? p.h_414 : p.height)};
    /* display */
    display: ${(p) => (p.d_414 ? p.d_414 : p.display)};
    /* flex-direction */
    flex-direction: ${(p) => (p.fd_414 ? p.fd_414 : p.flexDirection)};
    /* align-items */
    align-items: ${(p) => (p.alignItems_414 ? p.alignItems_414 : p.alignItems)};
    /* margin */
    margin: ${(p) => (p.m_414 ? p.m_414 : p.margin)};
    margin-top: ${(p) => (p.mt_414 ? p.mt_414 : p.mt)};
    margin-left: ${(p) => (p.ml_414 ? p.ml_414 : p.ml)};
    margin-right: ${(p) => (p.mr_414 ? p.mr_414 : p.mr)};
    margin-bottom: ${(p) => (p.mb_414 ? p.mb_414 : p.mb)};
    /* padding */
    padding: ${(p) => (p.p_414 ? p.p_414 : p.padding)};
    padding-top: ${(p) => (p.pt_414 ? p.pt_414 : p.pt)};
    padding-left: ${(p) => (p.pl_414 ? p.pl_414 : p.pl)};
    padding-right: ${(p) => (p.pr_414 ? p.pr_414 : p.pr)};
    padding-bottom: ${(p) => (p.pb_414 ? p.pb_414 : p.pb)};
  }

  @media (min-width: 600px) {
    /* width */
    width: ${(p) => (p.w_600 ? p.w_600 : p.w_414)};
    /* height */
    height: ${(p) => (p.h_600 ? p.h_600 : p.h_414)};
    /* display */
    display: ${(p) => (p.d_600 ? p.d_600 : p.d_414)};
    /* flex-direction */
    flex-direction: ${(p) => (p.fd_600 ? p.fd_600 : p.fd_414)};
    /* align-items */
    align-items: ${(p) =>
      p.alignItems_600 ? p.alignItems_600 : p.alignItems_414};
    /* margin */
    margin: ${(p) => (p.m_600 ? p.m_600 : p.m_414)};
    margin-top: ${(p) => (p.mt_600 ? p.mt_600 : p.mt_414)};
    margin-left: ${(p) => (p.ml_600 ? p.ml_600 : p.ml_414)};
    margin-right: ${(p) => (p.mr_600 ? p.mr_600 : p.mr_414)};
    margin-bottom: ${(p) => (p.mb_600 ? p.mb_600 : p.mb_414)};
    /* padding */
    padding: ${(p) => (p.p_600 ? p.p_600 : p.p_414)};
    padding-top: ${(p) => (p.pt_600 ? p.pt_600 : p.pt_414)};
    padding-left: ${(p) => (p.pl_600 ? p.pl_600 : p.pl_414)};
    padding-right: ${(p) => (p.pr_600 ? p.pr_600 : p.pr_414)};
    padding-bottom: ${(p) => (p.pb_600 ? p.pb_600 : p.pb_414)};
  }

  @media (min-width: 768px) {
    /* width */
    width: ${(p) => (p.w_768 ? p.w_768 : p.w_600)};
    /* height */
    height: ${(p) => (p.h_768 ? p.h_768 : p.h_600)};
    /* display */
    display: ${(p) => (p.d_768 ? p.d_768 : p.d_600)};
    /* flex-direction */
    flex-direction: ${(p) => (p.fd_768 ? p.fd_768 : p.fd_600)};
    /* align-items */
    align-items: ${(p) =>
      p.alignItems_768 ? p.alignItems_768 : p.alignItems_600};
    /* margin */
    margin: ${(p) => (p.m_768 ? p.m_768 : p.m_600)};
    margin-top: ${(p) => (p.mt_768 ? p.mt_768 : p.mt_600)};
    margin-left: ${(p) => (p.ml_768 ? p.ml_768 : p.ml_600)};
    margin-right: ${(p) => (p.mr_768 ? p.mr_768 : p.mr_600)};
    margin-bottom: ${(p) => (p.mb_768 ? p.mb_768 : p.mb_600)};
    /* padding */
    padding: ${(p) => (p.p_768 ? p.p_768 : p.p_600)};
    padding-top: ${(p) => (p.pt_768 ? p.pt_768 : p.pt_600)};
    padding-left: ${(p) => (p.pl_768 ? p.pl_768 : p.pl_600)};
    padding-right: ${(p) => (p.pr_768 ? p.pr_768 : p.pr_600)};
    padding-bottom: ${(p) => (p.pb_768 ? p.pb_768 : p.pb_600)};
  }

  @media (min-width: 992px) {
    /* width */
    width: ${(p) => (p.w_992 ? p.w_992 : p.w_768)};
    /* height */
    height: ${(p) => (p.h_992 ? p.h_992 : p.h_768)};
    /* display */
    display: ${(p) => (p.d_992 ? p.d_992 : p.d_768)};
    /* flex-direction */
    flex-direction: ${(p) => (p.fd_992 ? p.fd_992 : p.fd_768)};
    /* align-items */
    align-items: ${(p) =>
      p.alignItems_992 ? p.alignItems_992 : p.alignItems_768};
    /* margin */
    margin: ${(p) => (p.m_992 ? p.m_992 : p.m_768)};
    margin-top: ${(p) => (p.mt_992 ? p.mt_992 : p.mt_768)};
    margin-left: ${(p) => (p.ml_992 ? p.ml_992 : p.ml_768)};
    margin-right: ${(p) => (p.mr_992 ? p.mr_992 : p.mr_768)};
    margin-bottom: ${(p) => (p.mb_992 ? p.mb_992 : p.mb_768)};
    /* padding */
    padding: ${(p) => (p.p_992 ? p.p_992 : p.p_768)};
    padding-top: ${(p) => (p.pt_992 ? p.pt_992 : p.pt_768)};
    padding-left: ${(p) => (p.pl_992 ? p.pl_992 : p.pl_768)};
    padding-right: ${(p) => (p.pr_992 ? p.pr_992 : p.pr_768)};
    padding-bottom: ${(p) => (p.pb_992 ? p.pb_992 : p.pb_768)};
  }

  @media (min-width: 1200px) {
    /* width */
    width: ${(p) => (p.w_1200 ? p.w_1200 : p.w_992)};
    /* height */
    height: ${(p) => (p.h_1200 ? p.h_1200 : p.h_992)};
    /* display */
    display: ${(p) => (p.d_1200 ? p.d_1200 : p.d_992)};
    /* flex-direction */
    flex-direction: ${(p) => (p.fd_1200 ? p.fd_1200 : p.fd_992)};
    /* align-items */
    align-items: ${(p) =>
      p.alignItems_1200 ? p.alignItems_1200 : p.alignItems_992};
    /* margin */
    margin: ${(p) => (p.m_1200 ? p.m_1200 : p.m_992)};
    margin-top: ${(p) => (p.mt_1200 ? p.mt_1200 : p.mt_992)};
    margin-left: ${(p) => (p.ml_1200 ? p.ml_1200 : p.ml_992)};
    margin-right: ${(p) => (p.mr_1200 ? p.mr_1200 : p.mr_992)};
    margin-bottom: ${(p) => (p.mb_992 ? p.mb_992 : p.mb_768)};
    /* padding */
    padding: ${(p) => (p.p_1200 ? p.p_1200 : p.p_992)};
    padding-top: ${(p) => (p.pt_1200 ? p.pt_1200 : p.pt_992)};
    padding-left: ${(p) => (p.pl_1200 ? p.pl_1200 : p.pl_992)};
    padding-right: ${(p) => (p.pr_1200 ? p.pr_1200 : p.pr_992)};
    padding-bottom: ${(p) => (p.pb_992 ? p.pb_992 : p.pb_768)};
  }

  @media (min-width: 1440px) {
    /* width */
    width: ${(p) => (p.w_1440 ? p.w_1440 : p.w_1200)};
    /* height */
    height: ${(p) => (p.h_1440 ? p.h_1440 : p.h_1200)};
    /* display */
    display: ${(p) => (p.d_1440 ? p.d_1440 : p.d_1200)};
    /* flex-direction */
    flex-direction: ${(p) => (p.fd_1440 ? p.fd_1440 : p.fd_1200)};
    /* align-items */
    align-items: ${(p) =>
      p.alignItems_1440 ? p.alignItems_1440 : p.alignItems_1200};
    /* margin */
    margin: ${(p) => (p.m_1440 ? p.m_1440 : p.m_1200)};
    margin-top: ${(p) => (p.mt_1440 ? p.mt_1440 : p.mt_1200)};
    margin-left: ${(p) => (p.ml_1440 ? p.ml_1440 : p.ml_1200)};
    margin-right: ${(p) => (p.mr_1440 ? p.mr_1440 : p.mr_1200)};
    margin-bottom: ${(p) => (p.mb_1440 ? p.mb_1440 : p.mb_1200)};
    /* padding */
    padding: ${(p) => (p.p_1440 ? p.p_1440 : p.p_1200)};
    padding-top: ${(p) => (p.pt_1440 ? p.pt_1440 : p.pt_1200)};
    padding-left: ${(p) => (p.pl_1440 ? p.pl_1440 : p.pl_1200)};
    padding-right: ${(p) => (p.pr_1440 ? p.pr_1440 : p.pr_1200)};
    padding-bottom: ${(p) => (p.pb_1440 ? p.pb_1440 : p.pb_1200)};
  }

  @media (min-width: 1920px) {
    /* width */
    width: ${(p) => (p.w_1920 ? p.w_1920 : p.w_1440)};
    /* height */
    height: ${(p) => (p.h_1920 ? p.h_1920 : p.h_1440)};
    /* display */
    display: ${(p) => (p.d_1920 ? p.d_1920 : p.d_1440)};
    /* flex-direction */
    flex-direction: ${(p) => (p.fd_1920 ? p.fd_1920 : p.fd_1440)};
    /* align-items */
    align-items: ${(p) =>
      p.alignItems_1920 ? p.alignItems_1920 : p.alignItems_1440};
    /* margin */
    margin: ${(p) => (p.m_1920 ? p.m_1920 : p.m_1440)};
    margin-top: ${(p) => (p.mt_1920 ? p.mt_1920 : p.mt_1440)};
    margin-left: ${(p) => (p.ml_1920 ? p.ml_1920 : p.ml_1440)};
    margin-right: ${(p) => (p.mr_1920 ? p.mr_1920 : p.mr_1440)};
    margin-bottom: ${(p) => (p.mb_1920 ? p.mb_1920 : p.mb_1440)};
    /* padding */
    padding: ${(p) => (p.p_1920 ? p.p_1920 : p.p_1440)};
    padding-top: ${(p) => (p.pt_1920 ? p.pt_1920 : p.pt_1440)};
    padding-left: ${(p) => (p.pl_1920 ? p.pl_1920 : p.pl_1440)};
    padding-right: ${(p) => (p.pr_1920 ? p.pr_1920 : p.pr_1440)};
    padding-bottom: ${(p) => (p.pb_1920 ? p.pb_1920 : p.pb_1440)};
  }
`
