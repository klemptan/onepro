const { Category, Good, Brand, GoodImage, GoodDetail } = require('../models/models')
const puppeteer = require('puppeteer')
const Downloader = require("nodejs-file-downloader");
const path = require('path')
const uuid = require('uuid');
const { Op } = require('sequelize')

class GoodController {
    async parseGoods(req, res, next) {
        const urls = [
            "/catalog/nasosy-vysokogo-davleniya/hawk/hd1417r-nasos-vysokogo-davleniya-170-bar-14-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/nhdp1120cwr-nasos-vysokogo-davleniya-200-bar-11-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/nhdp1420cwr-nasos-vysokogo-davleniya-200-bar-14-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/nhdp1520cwr-nasos-vysokogo-davleniya-200-bar-15-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/nmt-nasos-vysokogo-davleniya-200-bar-15-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/nmt-nasos-vysokogo-davleniya-200-bar-18-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/nmt-rn-nasos-vysokogo-davleniya-200-bar-15-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/npm1825r-nasos-vysokogo-davleniya-250-bar-18-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/npm1525r-nasos-vysokogo-davleniya-250-bar-15-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/nmt-rn-nasos-vysokogo-davleniya-200-bar-18-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/npm1525rn-nasos-vysokogo-davleniya-250-bar-15-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/nmt-cw-nasos-vysokogo-davleniya-200-bar-15-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/nmt-htr-nasos-vysokogo-davleniya-150-bar-14-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/nmt-htr-nasos-vysokogo-davleniya-150-bar-21-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/nlt2525i-nasos-vysokogo-davleniya-250-bar-25-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/nlt3020i-nasos-vysokogo-davleniya-200-bar-30-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/xlt2230ir-nasos-vysokogo-davleniya-300-bar-22-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/xlt3517ir-nasos-vysokogo-davleniya-170-bar-35-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/xlt4317ir-nasos-vysokogo-davleniya-170-bar-43-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/xlt3020sr-nasos-vysokogo-davleniya-200-bar-30-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/px1735ir-nasos-vysokogo-davleniya-350-bar-17-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/xxt4220ir-br-nasos-vysokogo-davleniya-br-200-bar-42-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/hawk/nmt-inox-nasos-vysokogo-davleniya-200-bar-15-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/annovi-reverberi/rc-14-16-n-dx-nasos-vysokogo-davleniya-160-bar-14-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/annovi-reverberi/rr-14-20-n-dx-nasos-vysokogo-davleniya-200-bar-14-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/annovi-reverberi/rr-15-20-n-rhs-nasos-vysokogo-davleniya-200-bar-15-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/annovi-reverberi/rr-14-25h-n-dx-nasos-vysokogo-davleniya-250-bar-21-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/annovi-reverberi/rr-15-25h-n-rhs-nasos-vysokogo-davleniya-250-bar-15-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/annovi-reverberi/rrv-3-g27-d-3-4-s-flantsem-nasos-vysokogo-davleniya-186-bar-11-4-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/annovi-reverberi/rrv-4-g36-d-1-s-flantsem-nasos-vysokogo-davleniya-250-bar-15-1-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/annovi-reverberi/rk-15-20-n-nasos-vysokogo-davleniya-200-bar-15-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/annovi-reverberi/rk-18-28-h-n-nasos-vysokogo-davleniya-275-bar-18-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/annovi-reverberi/rg-15-15-n-dx-nasos-vysokogo-davleniya-150-bar-15-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/annovi-reverberi/rg-18-25h-n-dx-nasos-vysokogo-davleniya-250-bar-18-3-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/annovi-reverberi/rg-21-25h-n-dx-nasos-vysokogo-davleniya-250-bar-21-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/annovi-reverberi/rg-15-28-h-n-nasos-vysokogo-davleniya-280-bar-15-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/annovi-reverberi/jk-15-28-h-n-nasos-vysokogo-davleniya-280-bar-15-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/annovi-reverberi/rw-21-15h-n-nasos-vysokogo-davleniya-150-bar-21-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/annovi-reverberi/rgx-15-50-h-n-nasos-vysokogo-davleniya-500-bar-15-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/annovi-reverberi/rgx-22-50-h-n-nasos-vysokogo-davleniya-500-bar-22-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/annovi-reverberi/xwp-65-12-n-nasos-vysokogo-davleniya-120-bar-65-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/annovi-reverberi/xwp-70-15-n-nasos-vysokogo-davleniya-150-bar-70-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/mazzoni-/pm14170r-nasos-vysokogo-davleniya-170-bar-14-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/mazzoni-/pm11170r-nasos-vysokogo-davleniya-170-bar-11-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/mazzoni-/pm14170r-cw-nasos-vysokogo-davleniya-170-bar-14-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/mazzoni-/mmd18250r-cw-nasos-vysokogo-davleniya-250-bar-18-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/mazzoni-/mmd15250r-nasos-vysokogo-davleniya-250-bar-15-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/mazzoni-/mmd21250r-nasos-vysokogo-davleniya-250-bar-21-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/mazzoni-/mmd15250r-cw-nasos-vysokogo-davleniya-250-bar-15-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/mazzoni-/mmd21250r-cw-nasos-vysokogo-davleniya-250-bar-21-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/mazzoni-/tmm15200r-nasos-vysokogo-davleniya-200-bar-15-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/mazzoni-/gm27300r-nasos-vysokogo-davleniya-300-bar-27-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/mazzoni-/gm30250r-nasos-vysokogo-davleniya-250-bar-30-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/mazzoni-/gm43170r-nasos-vysokogo-davleniya-170-bar-43-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/mazzoni-/gm54150r-nasos-vysokogo-davleniya-150-bar-54-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/mazzoni-/gm63150r-nasos-vysokogo-davleniya-150-bar-63-l-min/",
            "/catalog/nasosy-vysokogo-davleniya/mazzoni-/tgm43170r-nasos-vysokogo-davleniya-170-bar-43-l-min/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-uplotneniy-mj-mm-20-mm-s-latunyu-1-porsh-/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-uplotneniy-18kh30-mm-pm-1-porsh-/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/shponka-8kh7kh35/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/uplotnenie-kolenvala-d-25kh47kh7-nmt-es-npm/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/remontnyy-komplekt-uplotneniy-d-18-s-ar/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/shtok-shatuna-porshnya-nasosa-ar/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-maslyanoy-manzhety-16x24x5/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-masl-uplotneniy-hawk-nmt-3-manzh-/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-masl-uplotneniy-hd/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-zaglushki-klapana-nmt-nlt/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/remontnyy-komplekt-kolets-s-322-ar/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-uplotneniy-kartera-nmt/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-indikatsii-urovnya-masla-nasosa-ar/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/shatun-porshnya-nasosa-ar/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-maslyannykh-uplotneniy-nasosa-mm-pm-3-porsh-/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/remontnyy-komplekt-maslyanykh-manzhet-ar/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/remontnyy-komplekt-klapana-s-298-rg/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-porshnya-nasosa-pm-18-mm-v-sbore/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-porshnya-keramicheskogo-pm/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-porshnya-v-sbore-mj-mm-20-mm/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/porshen-nasosa-ar/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/remontnyy-komplekt-klapana-13-ar/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/remontnyy-komplekt-maslyanykh-manzhet-s-194-rg/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-porshnya-keramicheskogo-mmd-mm-2-20-mm/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/remontnyy-komplekt-vtulok-3-porshnya-d-18-s-322-ar/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/remkomplekt-porshnya-nasosa-hd-/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-keramicheskogo-porshnya-npm-18-mm/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-keramicheskogo-porshnya-nmt-20-mm/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-keramicheskogo-porshnya-hd-15-mm/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-keramicheskogo-porshnya-hc-370-18-mm/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-porshnya-nmt-shatun-v-sbore/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-uplotneniy-nasosa-pm-18-mm-s-latunyu-1-porsh-/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/remontnyy-komplekt-uplotneniy-ar/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-klapanov-nasosa-pm-6-sht-/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-maslyannykh-uplotneniy-nasosa-mm-pm-3-porsh-260803-polnyy-anlog-ot-hawk/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-klapanov-mm-1-mm-2-6-sht-/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-porshnya-v-sbore-mmd-zamena-r4-002-016/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-klapanov-hd/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-uplotneniy-15-mm-hd-1-porsh-/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-klapanov-nasosa-nmt-npm/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-vodyanykh-uplotneniy-pm/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/remontnyy-komplekt-uplotneniy-3-porshnya-s-298-rg/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-uplotneniy-18-mm-npm-malyy/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-uplotneniy-mmd-mm-2-20-mm-malyy/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-uplotneniy-20-mm-nmt-1-porsh-/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-uplotneniy-18-mm-npm-1-porsh-/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/kolenval-nmt-1520/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-uplotneniy-20-mm-nmt-3-porsh-/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-uplotneniy-15-mm-hd-3-porsh-/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-uplotneniy-18-mm-npm-3-porsh-/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/remontnyy-komplekt-porshnya-d-18-s-ar/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-uplotneniy-18-mm-ld-le-lg-hd/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/remontnyy-komplekt-porshnya-d-18-s-402-rg/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/remontnyy-komplekt-vtulok-3-porshnya-d-18-s-298-rg/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-klapannogo-bloka-ar/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-uplotneniy-20-mm-nmt-s-latunyu/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/golovnaya-chast-nasosa-nmt-npm-blok-klapannyy-nmt-npm-1-2-3-8-/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/golovnaya-chast-nasosa-rr-v-sbore-3229202-nikel-ar/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/golovnaya-chast-nasosa-pm-18-v-sbore/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/golovnaya-chast-nasosa-mmd-mm-2-20-mm-v-sbore/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-klapannogo-bloka-nmt/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/golovnaya-chast-nasosa-v-sbore-npm-komplekt-klapannogo-bloka-npm1525-/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/golovnaya-chast-nasosa-pm-cw-18-v-sbore/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/golovnaya-chast-nasosa-rg-v-sbore-4029200-latun-rg/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-klapannogo-bloka-nmt-cw/",
            "/catalog/remkomplekty-dlya-nasosov-vysokogo-davleniya/komplekt-klapannogo-bloka-d-18-hd/",
            "/catalog/regulyatory-davleniya/komplekt-uplotneniy-porshnya-vrt3/",
            "/catalog/regulyatory-davleniya/remnabor-vrt3-ps6-16-25-mpa/",
            "/catalog/regulyatory-davleniya/regulyator-davleniya-vrt3-160-bar/",
            "/catalog/regulyatory-davleniya/regulyator-davleniya-s-mikrovyklyuchatelem-vrt3-310-bar/",
            "/catalog/regulyatory-davleniya/regulyator-davleniya-s-mikrovyklyuchatelem-vrt3-220-bar/",
            "/catalog/regulyatory-davleniya/regulyator-davleniya-vrt3-250-bar-nerzh/",
            "/catalog/regulyatory-davleniya/regulyator-davleniya-vrt3-160-bar-40l-min-nerzh-/",
            "/catalog/elektrodvigateli/eme/dvigatel-eme-polyy-val-3-0-kvt-1450-ob-min-230-v-50-gts/",
            "/catalog/elektrodvigateli/eme/dvigatel-eme-polyy-val-h112-4-0-kvt-1450-ob-min-400-v-50-gts/",
            "/catalog/elektrodvigateli/eme/dvigatel-eme-termic-polyy-val-4-0-kvt-1450-ob-min-400-v-50-gts/",
            "/catalog/elektrodvigateli/eme/dvigatel-eme-df-dvoynoy-flanets-mufta-4-5-kvt-1450-ob-min-400-v-50-gts/",
            "/catalog/elektrodvigateli/eme/dvigatel-eme-polyy-val-5-5-kvt-1450-ob-min-400-v-50-gts/",
            "/catalog/elektrodvigateli/eme/dvigatel-eme-termic-polyy-val-5-5-kvt-1450-ob-min-400-v-50-gts/",
            "/catalog/elektrodvigateli/eme/dvigatel-eme-polyy-val-6-3-kvt-1450-ob-min-400-v-50-gts/",
            "/catalog/elektrodvigateli/eme/dvigatel-eme-termic-polyy-val-6-3-kvt-1450-ob-min-400-v-50-gts/",
            "/catalog/elektrodvigateli/eme/dvigatel-eme-termic-polyy-val-7-5-kvt-1450-ob-min-400-v-50-gts/",
            "/catalog/elektrodvigateli/eme/dvigatel-eme-polyy-val-7-6-kvt-1450-ob-min-400-v-50-gts/",
            "/catalog/elektrodvigateli/eme/dvigatel-eme-polyy-val-11-0-kvt-1450-ob-min-400-v-50-gts/",
            "/catalog/elektrodvigateli/eme/dvigatel-eme-df-dvoynoy-flanets-mufta-15-0-kvt-1450-ob-min-400-v-50-gts/",
            "/catalog/elektrodvigateli/eme/dvigatel-eme-t160-standartnyy-val-15-0-kvt-1450-ob-min-400-v-50-gts/",
            "/catalog/elektrodvigateli/eme/dvigatel-eme-t132-standartnyy-val-15-0-kvt-1450-ob-min-400-v-50-gts/",
            "/catalog/elektrodvigateli/eme/dvigatel-eme-t160-standartnyy-val-18-5-kvt-1450-ob-min-400-v-50-gts/",
            "/catalog/elektrodvigateli/mazzoni/dvigatel-mazzoni-m100-termic-df-dvoynoy-flanets-mufta-4-0-kvt-1450-ob-min-400-v-50-gts/",
            "/catalog/elektrodvigateli/mazzoni/dvigatel-mazzoni-m112-termic-df-dvoynoy-flanets-mufta-4-5-kvt-1450-ob-min-400-v-50-gts/",
            "/catalog/elektrodvigateli/mazzoni/dvigatel-mazzoni-df-dvoynoy-flanets-mufta-5-5-kvt-1450-ob-min-400-v-50-gts/",
            "/catalog/elektrodvigateli/mazzoni/dvigatel-mazzoni-df-dvoynoy-flanets-mufta-11-0-kvt-1450-ob-min-400-v-50-gts/",
            "/catalog/elektrodvigateli/mazzoni/dvigatel-mazzoni-termic-df-dvoynoy-flanets-mufta-11-0-kvt-1450-ob-min-400-v-50-gts/",
            "/catalog/elektrodvigateli/mazzoni/dvigatel-mazzoni-termic-df-dvoynoy-flanets-mufta-15-0-kvt-1450-ob-min-400-v-50-gts/",
            "/catalog/elektrodvigateli/nicolini/dvigatel-nicolini-polyy-val-3-0-kvt-1450-ob-min-230-v-50-gts/",
            "/catalog/elektrodvigateli/nicolini/dvigatel-nicolini-nmt-polyy-val-4-0-kvt-1450-ob-min-230-400-v-50-gts/",
            "/catalog/elektrodvigateli/nicolini/dvigatel-nicolini-nhd-polyy-val-4-0-kvt-1450-ob-min-230-400-v-50-gts/",
            "/catalog/elektrodvigateli/nicolini/dvigatel-nicolini-polyy-val-5-5-kvt-1450-ob-min-230-400-v-50-gts/",
            "/catalog/elektrodvigateli/nicolini/dvigatel-nicolini-nmt-polyy-val-5-5-kvt-1450-ob-min-230-400-v-50-gts/",
            "/catalog/elektrodvigateli/nicolini/dvigatel-nicolini-nhd-polyy-val-5-5-kvt-1450-ob-min-230-400-v-50-gts/",
            "/catalog/elektrodvigateli/nicolini/dvigatel-nicolini-hs-h112-polyy-val-6-3-kvt-1450-ob-min-230-400-v-50-gts/",
            "/catalog/elektrodvigateli/nicolini/dvigatel-nicolini-hs-h112-df-dvoynoy-flanets-mufta-6-3-kvt-1450-ob-min-230-400-v-50-gts/",
            "/catalog/elektrodvigateli/nicolini/dvigatel-nicolini-polyy-val-6-5-kvt-1450-ob-min-230-400-v-50-gts/",
            "/catalog/elektrodvigateli/nicolini/dvigatel-nicolini-df-dvoynoy-flanets-mufta-6-5-kvt-1450-ob-min-230-400-v-50-gts/",
            "/catalog/elektrodvigateli/nicolini/dvigatel-nicolini-polyy-val-7-5-kvt-1450-ob-min-230-400-v-50-gts/",
            "/catalog/elektrodvigateli/nicolini/dvigatel-nicolini-polyy-val-7-6-kvt-1450-ob-min-230-400-v-50-gts/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/soedinitelnye-shlangi-100-sm-1-1/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/gidroakkumulyatory-dlya-vodosnabzheniya-i-otopleniya/flanets-dlya-gidroakkumulyatorov/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/skvazhinnyy-vintovoy-nasos-aquamotor-3-ar-3qgd2-115/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/skvazhinnyy-vintovoy-nasos-aquamotor-3-ar-3qgd1-95-90/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/skvazhinnyy-vintovoy-nasos-aquamotor-3-ar-3qgd1-85-70/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/vibratsionnyy-nasos-aquamotor-arvp-250-10v/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/vibratsionnyy-nasos-aquamotor-arvp-180-10t/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/tsentrobezhnyy-nasos-aquamotor-arcpm-750/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/tsentrobezhnyy-nasos-aquamotor-arcpm-370/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/tsentrobezhnyy-nasos-aquamotor-arjet-110/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/tsentrobezhnyy-nasos-aquamotor-arjet-100/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/tsentrobezhnyy-nasos-aquamotor-arjet-80/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/tsentrobezhnyy-nasos-aquamotor-arjet-60-1/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/povysitelnyy-nasos-aquamotor-ar-ar-wip-18/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/povysitelnyy-nasos-aquamotor-ar-ar-wip-15/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/povysitelnyy-nasos-aquamotor-ar-ar-wip-10/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/povysitelnyy-nasos-aquamotor-ar-upa-90/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/povysitelnyy-nasos-aquamotor-ar-upa/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/tsirkulyatsionnyy-nasos-aquamotor-ar-cr-32-8-180/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/tsirkulyatsionnyy-nasos-aquamotor-ar-cr-32-6-180/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/tsirkulyatsionnyy-nasos-aquamotor-ar-cr-32-4-180/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/tsirkulyatsionnyy-nasos-aquamotor-ar-cr-32-2-180/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/tsirkulyatsionnyy-nasos-aquamotor-ar-cr-25-8-180/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/tsirkulyatsionnyy-nasos-aquamotor-ar-cr-25-6-180/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/tsirkulyatsionnyy-nasos-aquamotor-ar-cr-25-4-180/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/tsirkulyatsionnyy-nasos-aquamotor-ar-cr-25-2-180/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/tsirkulyatsionnyy-nasos-aquamotor-ar-cr-15-6-130/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/tsirkulyatsionnyy-nasos-aquamotor-ar-cr-15-4-130/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/nasosnaya-stantsiya-aquamotor-aps-arqb-60-1-2/",
            "/catalog/kompressory/kompressor-abv-300-678/",
            "/catalog/kompressory/kompressor-abv-100-515/",
            "/catalog/kompressory/kompressor-ab-100-515/",
            "/catalog/kompressory/kompressor-ab-50-360-a/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/skvazhinnyy-nasos-aquamotor-3-4-ar-3sp-3-113-s/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/skvazhinnyy-nasos-aquamotor-3-4-ar-4sp-5-84-s/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/skvazhinnyy-nasos-aquamotor-3-4-ar-4sp-5-69-s/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/skvazhinnyy-nasos-aquamotor-3-4-ar-4sp-5-53-s/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/skvazhinnyy-nasos-aquamotor-3-4-ar-4sp-5-38-s/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/skvazhinnyy-nasos-aquamotor-3-4-ar-3sp-3-84-s/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/skvazhinnyy-nasos-aquamotor-3-4-ar-3sp-3-59-s/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/skvazhinnyy-nasos-aquamotor-3-4-ar-3sp-3-42-s/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/skvazhinnyy-nasos-aquamotor-3-4-ar-3sp-3-29-s/",
            "/catalog/elastichnye-mufty-i-flantsy/korpus-dempfernogo-soedineniya/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/fekalnyy-nasos-aquamotor-ar-wqv-750/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/fekalnyy-nasos-aquamotor-ar-wqv-450/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/fekalnyy-nasos-aquamotor-ar-wqv-250/",
            "/catalog/elastichnye-mufty-i-flantsy/dempfernoe-soedinenie/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/fekalnyy-nasos-aquamotor-ar-wqv-s-izmelchitelem-1500c/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/fekalnyy-nasos-aquamotor-ar-wqv-s-izmelchitelem-1100c/",
            "/catalog/elastichnye-mufty-i-flantsy/dempfernoe-soedinenie-24-38-h132-nmt-npm-nlti-xlti-pxi-xxt-mti-pm-lti/",
            "/catalog/elastichnye-mufty-i-flantsy/korpus-dempfernogo-soedineniya-h132-nmt-npm/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/kontroller-davleniya-rele-ar-as-pc-60a/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/kontroller-davleniya-rele-ar-as-pc-59a/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/kontroller-davleniya-rele-ar-as-pc-58a/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/kontroller-davleniya-rele-ar-as-pc-53a/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/kontroller-davleniya-rele-ar-as-pc-20a-komplekt/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/kontroller-davleniya-rele-ar-as-pc-18a-komplekt/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/kontroller-davleniya-rele-ar-as-pc-18a/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/kontroller-davleniya-rele-ar-as-pc-16a/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/kontroller-davleniya-rele-ar-as-pc-15-komplekt/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/rele-davleniya-ar-ms-pc-9-s-komplekt/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/kontroller-davleniya-rele-ar-as-pc-15/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/rele-davleniya-ar-ms-pc-9-s/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/kontroller-davleniya-rele-ar-as-pc-13a-komplekt/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/rele-davleniya-ar-ms-pc-9-f/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/rele-davleniya-ar-ms-pc-9-m/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/kontroller-davleniya-rele-ar-as-pc-12a-komplekt/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/rele-davleniya-ar-ms-pc-10-m/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/rele-davleniya-ar-ms-pc-10-f/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/rele-davleniya-ar-ms-pc-6-m/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/rele-davleniya-ar-ms-pc-6-f/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/nasosnye-stantsii-aquamotor-aps-arqb-80-24/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/nasosnye-stantsii-aquamotor-aps-arqb-70-24/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/nasosnye-stantsii-aquamotor-aps-arqb-60-24/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/nasosnye-stantsii-aquamotor-aps-arqb-60-1-19/",
            "/catalog/elastichnye-mufty-i-flantsy/flanets-h160-nmt-npm-nlti-xlti-pxi-xxt-mti-lti/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/rele-sukhogo-khoda-ar-ms-rs-9a-komplekt/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/rele-sukhogo-khoda-ar-ms-rs-9a/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/rele-sukhogo-khoda-ar-ms-rs-9v-komplekt/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/rele-sukhogo-khoda-ar-ms-rs-9v/",
            "/catalog/elastichnye-mufty-i-flantsy/dempfernoe-soedinenie-24-42-h160-xlti-pxi-xxt/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/poplavkovyy-vyklyuchatel-ar-pc-8a-10m-kabel/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/nasosnaya-stantsiya-aquamotor-aps-arjet-110-24/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/nasosnaya-stantsiya-aquamotor-aps-arjet-100-24/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/nasosnaya-stantsiya-aquamotor-aps-arjet-80-24/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/nasosnaya-stantsiya-aquamotor-aps-arjet-60-24/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/nasosnaya-stantsiya-aquamotor-aps-arjet-60-1-19/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/shtutser-5-ti-khodovoy-82-mm/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/shtutser-5-ti-khodovoy-82-mm-vse-vnutr-vkhody/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/shtutser-6-ti-khodovoy-110-mm-pod-shlang-1-/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/shtutser-5-ti-khodovoy-120-mm-pod-shlang-1-2-/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/shtutser-6-ti-khodovoy-110-mm-pod-shlang-1-2-/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/komplektuyushchie-dlya-sistem-vodosnabzheniya-i-otopleniya/filtr-setchatyy-latunnyy-1-2/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/nasosnaya-stantsiya-aquamotor-aps-arjpm-800/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/nasosnaya-stantsiya-aquamotor-aps-arjpm-400/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/pogruzhnye-nasosy-aquamotor-ardp-900-d-1/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/pogruzhnye-nasosy-aquamotor-ardp-750-d-1/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/pogruzhnye-nasosy-aquamotor-ardp-550-d-1/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/pogruzhnye-nasosy-aquamotor-ardp-400-d-1/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/pogruzhnye-nasosy-aquamotor-ardp-1100-d-1/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/pogruzhnye-nasosy-aquamotor-ardp-d-1/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/mnogostupenchatye-nasosy-aquamotor-armh/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/mnogostupenchatye-nasosy-aquamotor-armh-1100/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/mnogostupenchatye-nasosy-aquamotor-armh-920/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/vikhrevye-nasosy-aquamotor-arqb-80/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/vikhrevye-nasosy-aquamotor-arqb-70/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/vikhrevye-nasosy-aquamotor-arqb-60/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/nasosy-i-nasosnye-stantsii-bytovogo-naznacheniya/vikhrevye-nasosy-aquamotor-arqb/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/gidroakkumulyatory-dlya-vodosnabzheniya-i-otopleniya/gidroakkumulyator-dlya-vodosnabzheniya-arpt-n-050/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/gidroakkumulyatory-dlya-vodosnabzheniya-i-otopleniya/gidroakkumulyator-dlya-vodosnabzheniya-arpt-n-024/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/gidroakkumulyatory-dlya-vodosnabzheniya-i-otopleniya/gidroakkumulyator-dlya-vodosnabzheniya-arpt-n-019/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/gidroakkumulyatory-dlya-vodosnabzheniya-i-otopleniya/gidroakkumulyator-dlya-vodosnabzheniya-arpt-vt-050/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/gidroakkumulyatory-dlya-vodosnabzheniya-i-otopleniya/gidroakkumulyator-dlya-vodosnabzheniya-arpt-v-024/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/gidroakkumulyatory-dlya-vodosnabzheniya-i-otopleniya/gidroakkumulyator-dlya-vodosnabzheniya-arpt-v-019/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/gidroakkumulyatory-dlya-vodosnabzheniya-i-otopleniya/gidroakkumulyator-dlya-vodosnabzheniya-arpt-v-012/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/gidroakkumulyatory-dlya-vodosnabzheniya-i-otopleniya/gidroakkumulyator-dlya-vodosnabzheniya-arpt-v-008/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/gidroakkumulyatory-dlya-vodosnabzheniya-i-otopleniya/gidroakkumulyator-dlya-vodosnabzheniya-arpt-v-005/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/gidroakkumulyatory-dlya-vodosnabzheniya-i-otopleniya/gidroakkumulyator-dlya-vodosnabzheniya-arpt-v-002/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/gidroakkumulyatory-dlya-vodosnabzheniya-i-otopleniya/membrana-iz-kauchuka-membrana-pt-100-belaya/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/gidroakkumulyatory-dlya-vodosnabzheniya-i-otopleniya/membrana-iz-kauchuka-membrana-pt-100-chernaya/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/gidroakkumulyatory-dlya-vodosnabzheniya-i-otopleniya/membrana-iz-kauchuka-membrana-pt-050-chernaya/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/gidroakkumulyatory-dlya-vodosnabzheniya-i-otopleniya/membrana-iz-kauchuka-membrana-pt-050-belaya/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/gidroakkumulyatory-dlya-vodosnabzheniya-i-otopleniya/membrana-iz-kauchuka-membrana-pt-024-chernaya/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/gidroakkumulyatory-dlya-vodosnabzheniya-i-otopleniya/membrana-iz-kauchuka-membrana-pt-024-belaya/",
            "/catalog/oborudovanie-dlya-bytovogo-vodosnabzheniya-i-otopleniya/gidroakkumulyatory-dlya-vodosnabzheniya-i-otopleniya/membrana-iz-kauchuka-membrana-pt-008-/",
            "/catalog/reduktory/reduktor-rgb18-val-dv-25-mm-1-val-nasos-24-mm/",
            "/catalog/reduktory/reduktor-rgb24-val-dv-25-4-mm-1-val-nasosa-24-mm/",
            "/catalog/reduktory/reduktor-rgb24-val-dv-28-6-mm-1-1-8-val-nasos-24-mm/",
            "/catalog/reduktory/reduktor-rgb35-val-dv-28-6-mm-1-1-8-val-nasosa-24-mm/",
            "/catalog/reduktory/ponizhayushchiy-reduktor/",
            "/catalog/reduktory/povyshayushchiy-multiplikator/",
            "/catalog/reduktory/ponizhayushchiy-reduktor-1-099-678/",
            "/catalog/apparaty-vysokogo-davleniya/monoblok-vd/hawk-200-bar-960-l-ch-bp/",
            "/catalog/apparaty-vysokogo-davleniya/monoblok-vd/ar-180-bar-920-lch-bp/",
            "/catalog/apparaty-vysokogo-davleniya/monoblok-vd/ar-180-bar-920-l-ch-ts/",
            "/catalog/apparaty-vysokogo-davleniya/monoblok-vd/ar-215-bar-1000-lch-bp/",
            "/catalog/apparaty-vysokogo-davleniya/monoblok-vd/monoblok-m-1511/",
            "/catalog/apparaty-vysokogo-davleniya/monoblok-vd/hawk-200-bar-bp/",
            "/catalog/apparaty-vysokogo-davleniya/monoblok-vd/ar-215-bar-1000-l-ch-ts/",
            "/catalog/apparaty-vysokogo-davleniya/monoblok-vd/hawk-200-bar-ts/",
            "/catalog/apparaty-vysokogo-davleniya/monoblok-vd/hawk-200-bar-960-l-ch-ts/",
            "/catalog/apparaty-vysokogo-davleniya/monoblok-vd/hawk-215-bar-1100-l-ch-bp/",
            "/catalog/apparaty-vysokogo-davleniya/monoblok-vd/hawk-260-bar-1000-l-ch-bp/",
            "/catalog/apparaty-vysokogo-davleniya/monoblok-vd/hawk-215-bar-1100-lch-ts/",
            "/catalog/apparaty-vysokogo-davleniya/monoblok-vd/hawk-260-bar-1000-l-ch-ts/",
            "/catalog/apparaty-vysokogo-davleniya/monoblok-vd/hawk-210-bar-1300-lch-bp/",
            "/catalog/apparaty-vysokogo-davleniya/monoblok-vd/hawk-210-bar-1300-lch-ts/",
            "/catalog/apparaty-vysokogo-davleniya/mobilnye-avd/jettos-eddy-xr-1815/",
            "/catalog/apparaty-vysokogo-davleniya/mobilnye-avd/cayman-20015-bp/",
            "/catalog/apparaty-vysokogo-davleniya/mobilnye-avd/cayman-20015-ts/",
            "/catalog/apparaty-vysokogo-davleniya/mobilnye-avd/drop-20015-ts-s-nagrevom-vody/",
            "/catalog/apparaty-vysokogo-davleniya/mobilnye-avd/drop-19014-ts-s-nagrevom-vody/",
            "/catalog/apparaty-vysokogo-davleniya/mobilnye-avd/avant-16015-ts/",
            "/catalog/apparaty-vysokogo-davleniya/statsionarnyy-avd/ar-180-bar-900-l-ch-bp/",
            "/catalog/apparaty-vysokogo-davleniya/statsionarnyy-avd/ar-180-bar-900-l-ch-ts/",
            "/catalog/apparaty-vysokogo-davleniya/statsionarnyy-avd/hawk-200-bar-900-l-ch-bp/",
            "/catalog/apparaty-vysokogo-davleniya/statsionarnyy-avd/hawk-200-bar-900-l-ch-ts/",
            "/catalog/apparaty-vysokogo-davleniya/statsionarnyy-avd/ar-215-bar-1000-l-ch-bp/",
            "/catalog/apparaty-vysokogo-davleniya/statsionarnyy-avd/ar-215-bar-1000-l-ch-tst/",
            "/catalog/apparaty-vysokogo-davleniya/statsionarnyy-avd/hawk-fs-200-bar-900-l-ch-bp/",
            "/catalog/apparaty-vysokogo-davleniya/statsionarnyy-avd/hawk-200-bar-960-l-ch-bp./",
            "/catalog/apparaty-vysokogo-davleniya/statsionarnyy-avd/hawk-fs-200-bar-900-l-ch-ts/",
            "/catalog/apparaty-vysokogo-davleniya/statsionarnyy-avd/hawk-200-bar-960-l-ch-ts./",
            "/catalog/apparaty-vysokogo-davleniya/statsionarnyy-avd/hawk-215-bar-1100-l-ch-bp1/",
            "/catalog/apparaty-vysokogo-davleniya/statsionarnyy-avd/hawk-fs-200-bar-960-l-ch-bp/",
            "/catalog/apparaty-vysokogo-davleniya/statsionarnyy-avd/hawk-215-bar-1100-l-ch-ts/",
            "/catalog/apparaty-vysokogo-davleniya/statsionarnyy-avd/hawk-200-bar-960-l-ch-ts1/",
            "/catalog/komplektuyushchie-dlya-apparatov-vysokogo-davleniya/filtruyushchiy-element-s-obratnym-klapanom/",
            "/catalog/komplektuyushchie-dlya-apparatov-vysokogo-davleniya/filtruyushchiy-element-iz-nerzh-ctali-dlya-trubki-st-73/",
            "/catalog/komplektuyushchie-dlya-apparatov-vysokogo-davleniya/filtr-tonkoy-ochistki-60-mikron-3-4-/",
            "/catalog/komplektuyushchie-dlya-apparatov-vysokogo-davleniya/vkhodnoy-konnektor-filtr-3-4-f-3-4-f/",
            "/catalog/komplektuyushchie-dlya-apparatov-vysokogo-davleniya/komplekt-vkhodnogo-patrubka-1-2m-19-mm/",
            "/catalog/komplektuyushchie-dlya-apparatov-vysokogo-davleniya/manometr-0-400-1-4-m-50-mm/",
            "/catalog/komplektuyushchie-dlya-apparatov-vysokogo-davleniya/vkhodnoy-konnektor-filtr-1-2-m-17-mm/",
            "/catalog/komplektuyushchie-dlya-apparatov-vysokogo-davleniya/manometr-0-400-1-4-m-50-mm-sboku/",
            "/catalog/komplektuyushchie-dlya-apparatov-vysokogo-davleniya/manometr-0-300-1-8-m-40-mm/",
            "/catalog/komplektuyushchie-dlya-apparatov-vysokogo-davleniya/inzhektor-raspylitelnyy-st-60-3-8m-3-8f/",
            "/catalog/komplektuyushchie-dlya-apparatov-vysokogo-davleniya/inzhektor-raspylitelnyyst-60-1-1-6-2-0-3-8m-3-8f/",
            "/catalog/komplektuyushchie-dlya-apparatov-vysokogo-davleniya/inzhektor-st-160-s-doziruyushchim-ventilem-3-8-f-1-3-mm/",
            "/catalog/komplektuyushchie-dlya-apparatov-vysokogo-davleniya/inzhektor-st-168-s-doziruyushchim-ventilem-st-161/",
            "/catalog/rezbovye-soedineniya-i-mufty/zaglushka-1-4/",
            "/catalog/rezbovye-soedineniya-i-mufty/nippel-dvoynoy-1-2-1-2-/",
            "/catalog/rezbovye-soedineniya-i-mufty/zaglushka-3-8/",
            "/catalog/rezbovye-soedineniya-i-mufty/nippel-perekhodnoy-1-4-f-3-8-m/",
            "/catalog/rezbovye-soedineniya-i-mufty/zaglushka-latunnaya-1-4/",
            "/catalog/rezbovye-soedineniya-i-mufty/nippel-perekhodnoy-1-4-3-8/",
            "/catalog/rezbovye-soedineniya-i-mufty/nippel-perekhodnoy-3-8-1-2-350-bar/",
            "/catalog/rezbovye-soedineniya-i-mufty/nippel-perekhodnoy-1-4-m-3-8-m/",
            "/catalog/rezbovye-soedineniya-i-mufty/nippel-dvoynoy-3-8-3-8-/",
            "/catalog/rezbovye-soedineniya-i-mufty/nippel-soed-3-8-25-mm/",
            "/catalog/rezbovye-soedineniya-i-mufty/nippel-dvoynoy-1-4-1-4-/",
            "/catalog/rezbovye-soedineniya-i-mufty/nippel-soedenitelnyy-3-8-m-30-mm/",
            "/catalog/rezbovye-soedineniya-i-mufty/perekhodnik-m22kh1-5-3-8-f/",
            "/catalog/rezbovye-soedineniya-i-mufty/nippel-perekhodnoy-m22kh1-5-3-8-m/",
            "/catalog/rezbovye-soedineniya-i-mufty/nippel-perekhodnoy-kranzle-nippel-perekhodnoy-m22kh1-5-1-4-m/",
            "/catalog/rezbovye-soedineniya-i-mufty/perekhodnik-3-8-x-3-8/",
            "/catalog/rezbovye-soedineniya-i-mufty/nippel-perekhodnoy-m22kh1-5-1-4-f/",
            "/catalog/rezbovye-soedineniya-i-mufty/uglovoe-soedinenie-90-grad-3-8-f-3-8-f-nikel/",
            "/catalog/rezbovye-soedineniya-i-mufty/mufta-m22kh1-5-3-8-f/",
            "/catalog/rezbovye-soedineniya-i-mufty/mufta-m22kh1-5-1-4m/",
            "/catalog/rezbovye-soedineniya-i-mufty/soedinitel-l-obraznyy-g3-8-m/",
            "/catalog/rezbovye-soedineniya-i-mufty/soedinitel-l-obraznyy-g1-4-mm/",
            "/catalog/rezbovye-soedineniya-i-mufty/uglovoe-soedinenie-1-4-f-1-4-m-d-24/",
            "/catalog/rezbovye-soedineniya-i-mufty/soedinitel-l-obraznyy-g3-8-ff/",
            "/catalog/rezbovye-soedineniya-i-mufty/soedinitel-l-obraznyy-g1-2-m-g3-8-m/",
            "/catalog/rezbovye-soedineniya-i-mufty/soedinitel-l-obraznyy-g3-8-f-g3-8-m/",
            "/catalog/rezbovye-soedineniya-i-mufty/uglovoe-soedinenie-3-8-f-3-8-f-d-24/",
            "/catalog/rezbovye-soedineniya-i-mufty/soedinitel-t-obraznyy-3-8-f-m-f-400-bar/",
            "/catalog/rezbovye-soedineniya-i-mufty/soedinitel-t-obraznyy-3-8-f-f-m-400-bar/",
            "/catalog/rezbovye-soedineniya-i-mufty/soedinitel-t-obraznyy-3-8-f-f-f-400-bar/",
            "/catalog/rezbovye-soedineniya-i-mufty/nippel-perekhodnoy-1-4-3-8-nerzh/",
            "/catalog/rezbovye-soedineniya-i-mufty/nippel-soedinitelnyy-3-8-nerzh/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/koltso-uplotnitelnoe/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/vtulka-dn-08-pist-v-d/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/mufta-obzhimnaya-r1-r2t-1-4-dlya-shlanga-dn-6/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/vtulka-obzhimnaya-2sn-06-c/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/mufta-obzhimnaya-r1-r2t-5-16-dlya-shlanga-dn-8/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/vtulka-obzhimnaya-d-13-3mm-carwash-comfort/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/spiral-chernaya-13-5-mm/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/soedinenie-obzhimnoe-pryamoe-f1-4-xt1-4/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/spiral-sinyaya-13-5-mm/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/nippel-obzhimnoy-dn08/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/gayka-chernaya-m22kh1-5/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/nippel-obzhimnoy-dn06/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/nippel-obzhimnoy-1-4-x-t-1-4-/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/spiral-krasnaya-14-5-mm/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/vtulka-obzhimnaya-d-8-mm-r7-8/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/mufta-zashchitnaya-dn06/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/fiting-bsp-g-3-8-dn-06-0-/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/gayka-krasnaya-m22kh1-5/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/nippel-obzhimnoy-nw8-1-4-m-/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/mufta-zashchitnaya-dn08-chernaya/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/soedinenie-obzhimnoe-pryamoe-f3-8-xt5-16/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/mufta-zashchitnaya-dn06-sinyaya/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/gayka-sinyaya-m22x1-5/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/fiting-bsp-sh-3-8-dn-06/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/soedinenie-obzhimnoe-90-f1-4-xt1-4/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/nippel-soedinitelnyy-m22khm22/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/nippel-obzhimnoy-1-4-x-t-5-16/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/nippel-obzhimnoy-3-8-x-t-5-16/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/mufta-zashchitnaya-dn08-ker/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/rukav-v-davleniya-200-bar-siniy-carwash-comfort-1-metr/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/rukav-v-davleniya-200-bar-krasnyy-carwash-comfort-1-metr/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/soedinenie-obzhimnoe-90-f3-8-xt5-16/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/nippel-dvoynoy-dn06/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/nippel-dvoynoy-dn08/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/nippel-soed-s-plastikom-m22khm22/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/nippel-dks-10-mm-nw6-dlya-bytovykh-avd-karcher/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/shtutser-uglovoy-90-grad-dko-nw-06-m22x1-5/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/shtutser-uglovoy-shlang-dn08/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/shlang-vysokogo-davleniya-350-bar-10-m/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/shlang-vysokogo-davleniya-sompact-400-bar-10-m/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/shlang-vysokogo-davleniya-dlya-konsoli-1755-mm/",
            "/catalog/shlangi-vysokogo-davleniya-rukav-furnitura/shlang-vysokogo-davleniya-dlya-konsoli-2005-mm/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/r-komplekt-pistoleta-mv925/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/r-komplekt-pistoleta-mv925-weeping/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/r-komplekt-pistoleta-st2300-st2600/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/r-komplekt-pistoleta-st2300-st2600-202300491/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/r-komplekt-pistoleta-mv925-lp-weeping/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/pistolet-raspylitelnyy-v-davleniya-mv-925-m22x1-5/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/pistolet-rasp-v-d-mv925-3-8-1-4-pena/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/pistolet-vysokogo-davleniya-mv-2012/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/r-komplekt-klapana-pistoleta-st2300-st2600-tekushchiy/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/remkomplekt-klapana-pistoleta-st2300-st2600-tekushchiy-nizkoe-davlenie-202300447/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/r-komplekt-pistoleta-st2300-st2600-202300457/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/pistolet-st-2300/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/pistolet-raspylitelnyy-v-d-ml955/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/pist-rasp-v-dmv925-3-8-1-4-weeping/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/pistolet-vysokogo-davleniya-mv925-sw-top/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/pistolet-raspylitelnyy-v-d-mv925-vrashch-g3-8f-g1-4f/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/pistolet-rasp-v-davleniya-mv-2012-sw-top-/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/pistolet-v-d-mv925-m22x1-5-700-mm-v-sbore/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/pistolet-v-davleniya-st-2600-legkiy-start-1-4-f-3-8-f/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/pist-rasp-v-d-mv925-3-8-1-4-low-press/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/pistolet-v-d-st2300-3-8f-1-4f-vrashch/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/pistolet-v-davleniya-swivel-3-8-f/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/pistolet-raspylitelnyy-v-d-ml955-sw-top/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/pistolet-standartnyy-easywash365/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/pistolet-v-d-st2300-1-4f-m22x1-5-vrashch/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/pistolet-easywash365-weep/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/pistolet-v-davleniya-weep-low-press-swivel-3-8-f/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/pistolet-easywash365-s-zashchitoy-ot-zamerzaniya/",
            "/catalog/pistolety-kopya-aksessuary/pistolety/pistolet-st-2300-s-muftoy-kw/",
            "/catalog/pistolety-kopya-aksessuary/kopya/kope-330-mm-s-izol-ruchkoy-st-28/",
            "/catalog/pistolety-kopya-aksessuary/kopya/kope-raspylitelnoe-sf40-425-mm/",
            "/catalog/pistolety-kopya-aksessuary/kopya/kope-raspylitelnoe-sf40-500-mm/",
            "/catalog/pistolety-kopya-aksessuary/kopya/kope-raspylitelnoe-pryamoe-sf40-600-mm-1-4mkh1-4m/",
            "/catalog/pistolety-kopya-aksessuary/kopya/kope-raspylitelnoe-sf40-600-mm/",
            "/catalog/pistolety-kopya-aksessuary/kopya/kope-raspylitelnoe-nerzh-stal-sf40-1200-mm/",
            "/catalog/pistolety-kopya-aksessuary/kopya/povorotnoe-soedinenie-1-4-m-1-4-f-350-bar-viton/",
            "/catalog/pistolety-kopya-aksessuary/kopya/kope-easywash-n-stal-600-300-mm-s-izol-ruchkoy/",
            "/catalog/pistolety-kopya-aksessuary/kopya/kope-easywash-n-stal-433-400-mm-s-izol-ruchkoy/",
            "/catalog/pistolety-kopya-aksessuary/kopya/kope-raspylitelnoe-ml210-510-l200-820-500-bar/",
            "/catalog/pistolety-kopya-aksessuary/kopya/kope-raspylitelnoe-l50-1200-mm-550-bar-40-l-min-1-4-f-1-4-f/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunka-1-4-m-50-60/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/derzhatel-forsunki-mv114/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunka-d-khim-1-4-40-30/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunkoderzhatel-1-4-sht/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunka-25-04/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunka-25-035/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunkoderzhatel-mv114-nerzhaveyushchaya-stal/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunka-keramicheskaya-40-015-350-bar-1-4-m/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunka-nasadki-pennoy-1-20-mm/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunka-nasadki-pennoy-1-35-mm/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunka-nasadki-pennoy-1-45-mm/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunka-nasadki-pennoy-1-55-mm/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunka-dlya-peny-fl3/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/f-derzhatel-mv114-1-4-550-bar-n-stal-krasnyy/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunka-3-8-h-50120-u/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunka-3-8-m-50120/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunka-rotatsionnaya-tpl-1-2-04-280-bar-1-4/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunka-rotatsionnaya-tpl-1-3-045-280-bar-1-4/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunka-3-8-m-40150/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunkoderzhatel-nerzhaveyushchaya-stal-3-8-f-1-4-f-easywash365/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunka-pennaya-raspylit-st-75-1-2-04-1-4-chern/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/pennaya-nasadka-st-75-1-6-mm-1-4/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunka-pennaya-raspylit-st-75-1-2-04-1-4-sinyaya/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/pennaya-nasadka-st-75-1-6-mm-1-4-easywash/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunka-keramicheskaya-15-035-560-bar-1-4-m-500-bar/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunka-keramicheskaya-15-04-500-bar/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunka-rotatsionnaya-tpr35-1-35-350-bar-1-4/",
            "/catalog/pistolety-kopya-aksessuary/forsunki/forsunka-keramicheskaya-15-030-560-bar-1-4-m-500-bar/",
            "/catalog/pylesosy/odnoturbinnye-pylesosy/ares-wet-dry-23l-1-25kvt-nerzh-zhelt/",
            "/catalog/pylesosy/odnoturbinnye-pylesosy/ares-plus-37l-1-4kvt-plast-zhelt/",
            "/catalog/pylesosy/odnoturbinnye-pylesosy/ares-plus-37l-1-4kvt-nerzh-zhelt-cw/",
            "/catalog/pylesosy/odnoturbinnye-pylesosy/bio-21l-1-25kvt-plast/",
            "/catalog/pylesosy/odnoturbinnye-pylesosy/ares-plus-37l-1-4kvt-nerzh-zhelt/",
            "/catalog/pylesosy/dvukhturbinnye-pylesosy/exel-77l-2-4kvt-plast-zhelt-cw/",
            "/catalog/pylesosy/dvukhturbinnye-pylesosy/exel-76l-2-4kvt-nerzh-cw/",
            "/catalog/pylesosy/dvukhturbinnye-pylesosy/exel-76l-2-4kvt-nerzh/",
            "/catalog/pylesosy/tryekhturbinnye-pylesosy/exel-77l-3-3kvt-plast-zhelt-cw/",
            "/catalog/pylesosy/tryekhturbinnye-pylesosy/exel-76l-3-3kvt-nerzh-cw/",
            "/catalog/pylesosy/tryekhturbinnye-pylesosy/exel-77l-3-3kvt-plast/",
            "/catalog/pylesosy/tryekhturbinnye-pylesosy/exel-76l-3-3kvt-nerzh/",
            "/catalog/pylesosy/moyushchie-pylesosy/estro-37l-1-4kvt-plast-zhelt/",
            "/catalog/pylesosy/moyushchie-pylesosy/estro-21l-1-25kvt-plast/",
            "/catalog/pylesosy/moyushchie-pylesosy/estro-37l-1-4kvt-nerzh/",
            "/catalog/pylesosy/moyushchie-pylesosy/estro-bio-21l-1-25kvt-plast/",
            "/catalog/pylesosy/moyushchie-pylesosy/estro-77l-2-6kvt-plast/",
            "/catalog/pylesosy/moyushchie-pylesosy/estro-77l-3-3kvt-plast/",
            "/catalog/pylesosy/aksessuary-dlya-pylesosov/shchelevaya-nasadka-d-36/",
            "/catalog/pylesosy/aksessuary-dlya-pylesosov/shchelevaya-nasadka-d-40/",
            "/catalog/pylesosy/aksessuary-dlya-pylesosov/shchetka-kruglaya-d-36/",
            "/catalog/pylesosy/aksessuary-dlya-pylesosov/shchetka-kruglaya-d-40/",
            "/catalog/pylesosy/aksessuary-dlya-pylesosov/filtr-poliesterovyy-d-34-dlya-ares-wet-dry-wp110/",
            "/catalog/pylesosy/aksessuary-dlya-pylesosov/34-filtr-s-koltsom-dlya-pylesosov-elsea-seriy-esat-quiet-ares-dry-ares-wet-dry-fly-ares-plus-estro-1/",
            "/catalog/pylesosy/aksessuary-dlya-pylesosov/44-filtr-s-koltsom-dlya-pylesosov-elsea-seriy-exel-exel-m-verso-maximus-estro-250-330-elect-250/",
            "/catalog/pylesosy/aksessuary-dlya-pylesosov/filtr-poliesterovyy-d-40/",
            "/catalog/pylesosy/aksessuary-dlya-pylesosov/nasadka-moyushchaya-dlya-pola-/",
            "/catalog/pylesosy/aksessuary-dlya-pylesosov/shlang-vakuumnyy-d-38-bukhta-20-m-seryy/",
            "/catalog/pylesosy/aksessuary-dlya-pylesosov/shlang-vakuumnyy-d-38-bukhta-20-m-siniy/",
            "/catalog/pylesosy/aksessuary-dlya-pylesosov/shlang-vakuumnyy-d-38-bukhta-20-m-chernyy/",
            "/catalog/pylesosy/aksessuary-dlya-pylesosov/shlang-vakuumnyy-d-40-bukhta-30-m/",
            "/catalog/kompressory/la-padana-25l-233-l-min-8-bar/",
            "/catalog/kompressory/la-padana-100l-315-lmin-9-bar-230-v/",
            "/catalog/kompressory/la-padana-100l-315-lmin-9-bar-400-v/",
            "/catalog/kompressory/la-padana-150l-481-lmin-9-bar/",
            "/catalog/kompressory/la-padana-150l-481-lmin-9-bar-vertik-/",
            "/catalog/kompressory/la-padana-200l-585-lmin-11-bar/",
            "/catalog/kompressory/la-padana-270l-585-lmin-11-bar-vertik-/",
            "/catalog/penogeneratory-i-komplektuyushchie/forsunka-dlya-spreera-03-80-sinyaya/",
            "/catalog/penogeneratory-i-komplektuyushchie/pennaya-tabletka-smennyy-penoobrazuyushchiy-element-25-1512-51-0120720040/",
            "/catalog/penogeneratory-i-komplektuyushchie/forsunka-dlya-peny-25-60/",
            "/catalog/penogeneratory-i-komplektuyushchie/shlang-dlya-penogeneratora-10-m-diametr-8-mm/",
            "/catalog/penogeneratory-i-komplektuyushchie/pistolet-dlya-penogeneratora-v-sbore-stal/",
            "/catalog/penogeneratory-i-komplektuyushchie/shlang-dlya-penogeneratora-10-m-diametr-10-mm/",
            "/catalog/penogeneratory-i-komplektuyushchie/inzhektor-pennyy-dlya-karcher-/",
            "/catalog/penogeneratory-i-komplektuyushchie/uzel-penoobrazuyushchiy/",
            "/catalog/penogeneratory-i-komplektuyushchie/penogenerator-procar-25-l-krasnyy/",
            "/catalog/penogeneratory-i-komplektuyushchie/penogenerator-procar-50-l-krasnyy/",
            "/catalog/penogeneratory-i-komplektuyushchie/penogenerator-procar-24-l-khrom/",
            "/catalog/penogeneratory-i-komplektuyushchie/penogenerator-procar-100-l-krasnyy/",
            "/catalog/penogeneratory-i-komplektuyushchie/penogenerator-procar-50-l-khrom/",
            "/catalog/penogeneratory-i-komplektuyushchie/penogenerator-procar-100-l-khrom/",
            "/catalog/doziruyushchie-nasosy/doziruyushchiy-nasos-seko-tekna-evo-akl-603/",
            "/catalog/doziruyushchie-nasosy/doziruyushchiy-nasos-d3re2-af/",
            "/catalog/apparaty-dlya-khimchistki/trubka-raspylitelnaya-vnutrennyaya-pistoleta-easyclean365/",
            "/catalog/apparaty-dlya-khimchistki/rastrub-pistoleta-easyclean365-/",
            "/catalog/apparaty-dlya-khimchistki/trubka-raspylit-vneshn-dlya-pist-easyclean365-/",
            "/catalog/apparaty-dlya-khimchistki/raspylitel-dlya-khimchistki-easyclean-365/",
            "/catalog/membrannye-nasosy/komplekt-membran-nbr-dlya-ar-100-115-120-135-145/",
            "/catalog/membrannye-nasosy/remontnyy-komplekt-klapanov-dlya-ar-100-115-120-135/",
            "/catalog/membrannye-nasosy/ar-252-b-sp-sgc-24-6-l-min-650-1-min-25-bar/",
            "/catalog/membrannye-nasosy/ar-252-nbr-sp-sgc-24-6-l-min-650-1-min-25-bar/",
            "/catalog/membrannye-nasosy/ar-252-ap-nbr-sp-sgc-24-6-l-min-650-1-min-25-bar/",
            "/catalog/membrannye-nasosy/ar-26-5-dfl-nasos-26-5-l-min-4-1-bar-12-v/",
            "/catalog/membrannye-nasosy/ar-30-ap-b-36-2-l-min-550-1-min-40-bar/",
            "/catalog/membrannye-nasosy/ar-252-gci-gr-30-em-1-1-kvt-24-6-l-min-25-bar/",
            "/catalog/membrannye-nasosy/ar-135-bp/",
            "/catalog/membrannye-nasosy/ar-252-vpi-gr-30-et-1-1-kvt-24-6-l-min-25-bar/",
            "/catalog/membrannye-nasosy/ar-145-bp-s-s/",
            "/catalog/membrannye-nasosy/ar-160-bp-s-s/",
            "/catalog/membrannye-nasosy/ar-185-bp-s-s/",
            "/catalog/membrannye-nasosy/ar-215-bp-ap-nbr-c-c-219-1-l-min-550-1-min-20-bar/",
            "/catalog/membrannye-nasosy/ar-250-bp-ap-nbr-c-c-254-4-l-min-550-1-min-20-bar/",
            "/catalog/obratnye-klapany-datchiki-potoka-datchiki-davleniya/termicheskiy-klapan-ml610-g1-2-/",
            "/catalog/obratnye-klapany-datchiki-potoka-datchiki-davleniya/blok-ps2-3-8gm-15-bar/",
            "/catalog/obratnye-klapany-datchiki-potoka-datchiki-davleniya/blok-ps2-1-4gm-45-bar/",
            "/catalog/obratnye-klapany-datchiki-potoka-datchiki-davleniya/blok-ps2-1-8gm-45-bar/",
            "/catalog/obratnye-klapany-datchiki-potoka-datchiki-davleniya/obratnyy-klapan-cv5-g1-4f-maks-550-bar/",
            "/catalog/obratnye-klapany-datchiki-potoka-datchiki-davleniya/regulyator-davleniya-avariynyy-svl28-250-bar-3-8-f-3-8-f/",
            "/catalog/obratnye-klapany-datchiki-potoka-datchiki-davleniya/obratnyy-klapan-cv5-g3-8f-maks-550-bar/",
            "/catalog/obratnye-klapany-datchiki-potoka-datchiki-davleniya/reg-dav-avariynyy-svl17-150-bar-3-8-f-3-8-f/",
            "/catalog/obratnye-klapany-datchiki-potoka-datchiki-davleniya/obratnyy-klapan-v-d-400-bar-st-264-sht-1-4/",
            "/catalog/obratnye-klapany-datchiki-potoka-datchiki-davleniya/akselerometr-etc/",
            "/catalog/obratnye-klapany-datchiki-potoka-datchiki-davleniya/datchik-potoka-fs26/",
            "/catalog/obratnye-klapany-datchiki-potoka-datchiki-davleniya/regulyator-davleniya-svt40-360-bar-g3-8ff-bp-g3-8f/",
            "/catalog/obratnye-klapany-datchiki-potoka-datchiki-davleniya/dempfer-0-21-l-25-220-bar-r3-8-m/",
            "/catalog/obratnye-klapany-datchiki-potoka-datchiki-davleniya/akselerometr-etc-inox-550-bar/",
            "/catalog/obratnye-klapany-datchiki-potoka-datchiki-davleniya/reg-dav-avariynyy-svl50-560-bar-1-2/",
            "/catalog/nasosy-speroni/datchik-potoka/",
            "/catalog/nasosy-speroni/poverkhnostnyy-ctx-60-0-37-0-6-kvt-400-v-1-8-a/",
            "/catalog/nasosy-speroni/poverkhnostnyy-nasos-ctx-60-0-75-1-1-kvt-400-v-2-0-a/",
            "/catalog/nasosy-speroni/poverkhnostnyy-nasos-ctx-160-1-1-1-8-kvt-400-v-3-7-a/",
            "/catalog/nasosy-speroni/poverkhnostnyy-nasos-ctx-250-1-5-2-35-kvt-400-v-4-6-a/",
            "/catalog/nasosy-speroni/nasos-pogruzhnoy-sxs-1500-va-1-4-kvt-230-v-6-1-a/",
            "/catalog/nasosy-speroni/nasos-vs-2-15-1-5-kvt-400-v-3-5-a/",
            "/catalog/nasosy-speroni/nasos-vs-2-18-2-2-kvt-400-v-4-7-a/",
            "/catalog/klapany-elektromagnitnye/elektromagnitnyy-klapan-ev220w-042u471419/",
            "/catalog/klapany-elektromagnitnye/elektromagnitnyy-klapan-ev220w-042u426532/",
            "/catalog/klapany-elektromagnitnye/elektromagnitnyy-klapan-1-2-n-z-4-0-m3-ch-230-b-50-60-gts/",
            "/catalog/klapany-elektromagnitnye/klapan-elektromagnitnyy-yse-1-5/",
            "/catalog/klapany-elektromagnitnye/klapan-elektromagnitnyy-yse-10es-dc/",
            "/catalog/boylery-generatory-goryachey-vody/boyler-nagrevatelnyy-250-bar-15-l-min/",
            "/catalog/boylery-generatory-goryachey-vody/boyler-nagrevatelnyy-350-bar-25-l-min/",
            "/catalog/boylery-generatory-goryachey-vody/boyler-nagrevatelnyy-250-bar-15-l-min-220-v-s-upr/",
            "/catalog/boylery-generatory-goryachey-vody/boyler-nagrevatelnyy-250-bar-25-l-min-12-v-s-upr-panelyu/",
            "/catalog/boylery-generatory-goryachey-vody/boyler-nagrevatelnyy-250-bar-20-l-min-220-v-s-upr/",
            "/catalog/boylery-generatory-goryachey-vody/generator-goryachey-vody-byturbo-20015/",
            "/catalog/boylery-generatory-goryachey-vody/boyler-nagrevatelnyy-250-bar-20-l-min-12-v-s-upr/",
            "/catalog/boylery-generatory-goryachey-vody/boyler-nagrevatelnyy-250-bar-25-l-min-12-v-s-upr/",
            "/catalog/boylery-generatory-goryachey-vody/firebox-mobilnyy-boyler-250-bar-15-l-min-230-v/",
            "/catalog/boylery-generatory-goryachey-vody/firebox-mobilnyy-boyler-250-bar-20-l-min-230-v/",
            "/catalog/boylery-generatory-goryachey-vody/boyler-nagrevatelnyy-350-bar-25-l-min-220-v-s-upr/",
            "/catalog/boylery-generatory-goryachey-vody/boyler-nagrevatelnyy-350-bar-30-l-min-220-v-s-upr/",
            "/catalog/boylery-generatory-goryachey-vody/firebox-mobilnyy-boyler-500-bar-25-l-min-230-v/",
            "/catalog/boylery-generatory-goryachey-vody/boyler-nagrevatelnyy-350-bar-40-l-min-220-v-s-upr/",
            "/catalog/sistemy-ochistki-i-vodopodgotovki/sistema-ochistki-vody-aros-1/",
            "/catalog/sistemy-ochistki-i-vodopodgotovki/sistema-ochistki-vody-aros-2/",
            "/catalog/sistemy-ochistki-i-vodopodgotovki/sistema-ochistki-vody-aros-5/",
            "/catalog/protirochnye-materialy/gubka-avtomobilnaya-200kh120kh50-mm/",
            "/catalog/protirochnye-materialy/mikrofibra-makhra-320-g-m2-sinyaya-35kh40sm/",
            "/catalog/protirochnye-materialy/butylka-fra-ber/",
            "/catalog/protirochnye-materialy/ruchnoy-raspylitel/",
            "/catalog/protirochnye-materialy/zamsha-54kh40-zheltaya-250-gr/",
            "/catalog/protirochnye-materialy/zamsha-perf-54kh40-golubaya-250-gr/",
            "/catalog/protirochnye-materialy/zamsha-perf-54kh40-golubaya-300-gr/",
            "/catalog/protirochnye-materialy/gubka-avtomobilnaya-krupnoporistaya-180-110-70-mm-v-upakovke-10-sht-/",
            "/catalog/khimiya/sol-tabletirovannaya-limber-premium/",
            "/catalog/khimiya/kislotnoe-sredstvo-ats-100/",
            "/catalog/khimiya/kislotnoe-sredstvo-acid-40/",
            "/catalog/khimiya/vosk-quick-wax-eco-5/",
            "/catalog/khimiya/khimchistka-nerta-interior-cleaner/",
            "/catalog/khimiya/aktivnaya-pena-iself-alonso/",
            "/catalog/khimiya/aktivnaya-pena-iself-vettel/",
            "/catalog/khimiya/antimoskitnoe-sredstvo-bug-cleaner/",
            "/catalog/khimiya/vosk-perfect-wax/",
            "/catalog/khimiya/vosk-self-wax/",
            "/catalog/khimiya/aktivnaya-pena-super-car-cleaner-fluido-blu/",
            "/catalog/khimiya/vosk-quick-wax-eco/",
            "/catalog/khimiya/chernenie-reziny-br-gommanera-superlux/",
            "/catalog/khimiya/polirol-dlya-plastika-br-shine-matte/",
            "/catalog/khimiya/chernenie-reziny-br-black-tires/",
            "/catalog/khimiya/antimoskitnoe-sredstvo-br-bug-cleaner/"
        ]

        try {
            const browser = await puppeteer.launch()
            const page = await browser.newPage()
            let currentURL;
            page.waitForSelector('.product-page').then(() => console.log('First URL with image: ' + currentURL));

            for (currentURL of urls) {
                try {
                    await page.goto(`https://iself.shop${currentURL}`, { waitUntil: 'load', timeout: 0 })

                    const model = await page.$eval('h1', el => el.innerHTML)
                    const specifications = await page.evaluate(() => Array.from(document.querySelectorAll('.specifications-item-name'), element => element.innerHTML));
                    const article = specifications[1]
                    const brandName = specifications[0]
                    if (brandName == '') brandName = "не указан"
                    let description = (await page.$('#characteristics')) || "";
                    if (description != '') {
                        description = await page.$eval('#description div', el => el.innerHTML)
                    }
                    const price = await page.$eval('.prices-item-name.price-value', el => el.innerHTML.replace(/[^0-9.]/g, ''))
                    const images = await page.evaluate(() => Array.from(document.querySelectorAll('.thumb-bg'), element => 'https://iself.shop' + element.style.backgroundImage.replaceAll('url(\"', '').replaceAll('\")', '')));
                    let characteristics = (await page.$('#characteristics')) || "";
                    let details = []
                    if (characteristics != '') {
                        details = await page.evaluate(() => Array.from(document.querySelectorAll('.characteristics-item'), (element) => {
                            return {
                                name: element.children[0].innerHTML,
                                description: element.children[1].innerHTML
                            }
                        }))
                    }

                    const category = await Category.findOne({ where: { transcript: currentURL.split('/')[2] } })
                    let brand = await Brand.findOne({ where: { name: brandName } })
                    if (!brand) {
                        brand = await Brand.findOne({ where: { name: "не указан" } })
                    }
                    const good = await Good.create({
                        model: model,
                        article: article,
                        categoryId: category.id,
                        brandId: brand.id,
                        description: description,
                        price: +price,
                    })

                    images.map(async (img) => {
                        const fileName = uuid.v4() + img.substr(img.lastIndexOf('.'))
                        const downloader = new Downloader({
                            url: img,
                            directory: path.resolve(__dirname, '..', 'static'),
                            fileName: fileName
                        });
                        await downloader.download()
                        await GoodImage.create({ img: fileName, goodId: good.id })
                    })

                    details.map(async (d) => {
                        await GoodDetail.create({ name: d.name, description: d.description, goodId: good.id })
                    })
                } catch (e) {
                    console.log(e)
                    continue
                }

            }
            browser.close()
            return res.json({ done: 'done' })

        }
        catch (e) {
            next(e)
        }

    }

    async getAll(req, res, next) {
        try {
            let { sort, order, load, count, page, filter, categoryId } = req.query
            console.log(req.query)
            page = page || 1
            count = count || 20
            load = load || 20
            order = order || 'asc'
            sort = sort || 'id'
            if (categoryId == 0) {
                categoryId = null
            }
            filter = filter || 0
            let offset = page * load - load

            let goods = []
            if (!categoryId && !filter) {
                goods = await Good.findAndCountAll({
                    limit: load, offset, order: [[sort, order]], include: [
                        { model: GoodImage, as: 'good_images' },
                        { model: GoodDetail, as: 'good_details' }
                    ]
                })
            }
            else if (categoryId && !filter) {
                goods = await Good.findAndCountAll({
                    where: { categoryId }, limit: load, offset, order: [[sort, order]], include: [
                        { model: GoodImage, as: 'good_images' },
                        { model: GoodDetail, as: 'good_details' }
                    ]
                })
            }
            else if (!categoryId && filter) {
                goods = await Good.findAndCountAll({
                    where: { brandId: filter }, limit: load, offset, order: [[sort, order]], include: [
                        { model: GoodImage, as: 'good_images' },
                        { model: GoodDetail, as: 'good_details' }
                    ]
                })
            }
            else {
                goods = await Good.findAndCountAll({
                    where: { brandId: filter, categoryId }, limit: load, offset, order: [[sort, order]], include: [
                        { model: GoodImage, as: 'good_images' },
                        { model: GoodDetail, as: 'good_details' }
                    ]
                })
            }
            return res.json(goods)
        } catch (e) {
            next(e)
        }
    }


    async getByQuery(req, res, next) {
        try {
            const { query } = req.params
            const goods = await Good.findAll({
                where: {
                    [Op.or]: [
                        {
                            model: {
                                [Op.like]: `%${query}%`
                            }
                        },
                        {
                            description: {
                                [Op.like]: `%${query}%`
                            }
                        }
                    ]
                }
            })
            return res.json(goods)
        } catch (e) {
            next(e)
        }
    }

    async getOne(req, res, next) {
        const { id } = req.params
        let good = await Good.findOne({
            where: { id },
            include: [
                { model: GoodImage, as: 'good_images' },
                { model: GoodDetail, as: 'good_details' },
                { model: Category, as: 'category' },
                { model: Brand, as: 'brand' }
            ]
        })
        return res.json(good)
    }

}

module.exports = new GoodController()