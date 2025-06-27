import React from "react";
import "./Charu.css";
import { toast } from "react-toastify";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";

export const charuPerfumes = [
  
    {
      id: 1,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTNHFShumv3LZqFh5Dpw_R9dFtclAVW_Jl6jn0wY43tMivkW6gricL2u5zYOw2CvFzlrXFZ9bkjeNK8O0K9ecWMi1ZnJj0CBOM9AP0guGWtUx6LhDOn8uIxA",
      name: "Velvet Rose",
      price: 1200,
      description: "A luxurious floral fragrance with rich rose petals and a hint of musk, perfect for romantic evenings."
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR-mQ_Mi6AIU4YdXw_4WCf6ZN8TxQi0ICQl444vHloWgkSqGTJDlY94okVLR-fKxY02HopCOW6fE6pzUwNwNLeBA3ZZ5Qp-Ia-XqKD8isk",
      name: "Ocean Breeze",
      price: 1500,
      description: "A refreshing and clean aquatic scent that captures the crisp essence of sea waves and salty air."
    },
    {
      id: 3,
      image: "https://rukminim2.flixcart.com/image/1200/1200/xif0q/perfume/f/i/n/30-iconic-eau-de-parfum-guess-women-original-imah5ujacahrpp7p.jpeg",
      name: "Amber Nights",
      price: 1700,
      description: "A mysterious and sensual blend of amber, patchouli, and warm spices for enchanting night outings."
    },
    {
      id: 4,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQJ9o7DI3ghyulSKsdSVeaaSDaSpHvArAPahqSAAw0jBsuu_9EOM4403xkx91foCpr0zgfpP93DSzJvi-jpFJKAIEdQqwzMrXpuKKn0niSu",
      name: "Jasmine Glow",
      price: 1300,
      description: "A bright and breezy floral perfume bursting with jasmine blooms, giving you a radiant, fresh aura."
    },
    {
      id: 5,
      image: "https://m.media-amazon.com/images/I/61-JJ2sdKRL.jpg",
      name: "Mystic Sandalwood",
      price: 1800,
      description: "A deep, woody fragrance infused with creamy sandalwood and subtle earthy undertones for grounded elegance."
    },
    {
      id: 6,
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRecBm6BE6lwI_Di2n2eBWQ70c-Po2onJ-q531jL8LSK0vV23DrsVCdRN6nONmhaf_cGQPbbKvlENtjTJGSbHEcMCYquN1WH8i35-YlH50",
      name: "Citrus Burst",
      price: 1100,
      description: "An energetic mix of lemon, orange, and grapefruit notes that uplift your spirit with every spray."
    },
    {
      id: 7,
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQGZDWJ707-nzNfam8xP2BaCBovIwvOCnN7b3ZAjCabd71pp7GPCbEHvz89ALga4RCJ89wwD4H6zcAXv0dWtUHTIVNXLnoiWYsz_2q0PwYKG_YO7UYGFkLlGA",
      name: "Lavender Dream",
      price: 1400,
      description: "A calming scent of fresh lavender fields, blended with soft vanilla and powdery musk for serenity."
    },
    {
      id: 8,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSdyUfusXmKBXLDDtCe9Bqh0ZUzTIw8GRJt4JPxzidqU1RtQGy4m8hplcvG6ZyFQwNDB0wKwBj4ipVkB9hlgZeThQWf7t4dZBtbWzrrWfE",
      name: "Wild Orchid",
      price: 1600,
      description: "An exotic floral composition with sweet orchid petals and hints of juicy plum and delicate spice."
    },
    {
      id: 9,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTrHRL_Al-6PJ_L8z81r9uI36d0BdIx23JU3qfNa4oF1W-ZtDDyjBviRLc3fIkSp2kjlSw5T-e7KymZA6F9nRix6sUs5vTcpjGsa7ozMJ0",
      name: "Vanilla Whisper",
      price: 1250,
      description: "A creamy and cozy vanilla scent kissed with caramel and soft florals for a sweet everyday signature."
    },
    {
      id: 10,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTCPFLu-c22gY2_Fi1h1nvzjr_QTTpthLYIRHBLtZfn7ESJH5VU96-8DWa4dQVv37eJ4FHZ3nh7mEKjsGkKpaAvL-2RmCt7dNGHqJP-UD6lKt-L9DczvrYK",
      name: "Cedarwood Charm",
      price: 1750,
      description: "A sophisticated blend of cedarwood, vetiver, and smoky amber that leaves a lasting impression of warmth and strength."
    },
  
  

  {
     id: 11,
     image:
       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTBZxihIHeDHra6QfFt0_wlAxCfhs_7gvztVuUBMBLS6nMd7Nmw5lvFU_-1WwttqizpoI9zA7PchIzspQS7cl9nK4r2Wqy4tZC-5i0eUtQ",
     name: "Rosewood Mist",
     price: 1550,
   },
   {
     id: 12,
     image:
       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR7mn7ErLu5vy0jfBLJEFNe2G0rQ904gkLlLz-cuXwAMnrXHt5t1sjGckzDbYkn_aQNgEMqa4yPnDL-dDXvmArjEQyXEn-BkfjRwcmOUzkr06OnfuSm15Bu5g",
     name: "Fresh Mint",
     price: 1150,
   },
   {
     id: 13,
     image:
       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQji4cPajdUBnxlsRUSM7sy7tljFC1gmPSUadouHmuXjS0ogFVlat6yP7nWzQ5zZzQYBInPocXBF0ne2MOnv7I4uzBYRDyUXAihIkxAn9driTHZ8cfgCyTIf5I",
     name: "Saffron Essence",
     price: 1900,
   },
   {
     id: 14,
     image:
       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQUec4_OOMrfzF8qHC6G1B6TLKbxSEFXTYYCs4Re8DS5zg7cAPcXNksO6033a_YW-zCKhc9yPAN9cqs8SkeZiMq-PxAZ-v-H1pQReomaotk4oxdQ9H6CSuvFg",
     name: "Peach Blossom",
     price: 1350,
   },
   {
     id: 15,
     image:
       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRJy5kswjA-mAaAH7WfkAVivEYYRYdwwzlaSCkbVj5i6mubKJ6UQidWOiFQVe9VS-S7fzRfx-4R9e28rzYBMAZix3nZkUBcTD5XMMifACadhABwKbY-3Wa5",
     name: "Moss Garden",
     price: 1500,
   },
   {
     id: 16,
     image:
       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRn2sw-3te6JhCISwjHt28761haVfzZbhiidCyWkCr3Fggp6fk9DOE38lHAcFK4UMwX-YJinTiTC2PGqSx38MmKkha9DAIkV6hUsc1B6c8",
     name: "Tropical Rain",
     price: 1450,
   },
   {
     id: 17,
     image: "https://images.meesho.com/images/products/456070995/7pjwq_1200.jpg",
     name: "Coconut Breeze",
     price: 1300,
   },
   {
     id: 18,
     image:
       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRurRk09zaJLh7sGjV4G-bkgcevRk_ojJXlq-AqS7CxlCRpQQXONiXlPvxl8Tzfuzz0b0z2YkfqjWMugluvFjUT5MwEouMpU59pYYOcWZCOhzZbUMgQL-1M",
     name: "Blackcurrant Kiss",
     price: 1650,
   },
   {
     id: 19,
     image:
       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSA9W9J5cSFx5rcuRKVPwVNw4iRS59Fh4ZkTyTCaM8_JiSdsLkNZASNMgGKNqjUdrqYOSdyP4e1cGGFTMzSMeL3sVpPwSSCrMKOvNxarhkhN-KzxTn9c1yXPg",
     name: "Lemon Zest",
     price: 1200,
   },
   {
     id: 20,
     image:
       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQSyodLthiBXsdDs8KVdkrr8-ofLRWd4eSQkBpMI0m10kHI1qw1OdNyAWeELTRGikeGFD4sp6xIFpuD2TAM03fnM1jT-QiLPu45bxyHnYCe",
     name: "Sandalwood Night",
     price: 1800,
   },
 
   {
     id: 21,
     image:
       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSU8FKUTBdElaelewGt9w-CtJ9bO8QsgaMgvvbKLTJFKDxirTSiMm7CffbHqJkJmm0OWDIyQRXj2H0TABngiCyw96YSI05TxdOSAm3p75Je",
     name: "Orchid Whisper",
     price: 1400,
   },
   {
     id: 22,
     image:
       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQSQBkg3BbfES8q2rNpETqu8P0UL35gYLCpk4ivdBM2uTH_hVqIELsgs4WN2Mn6eUEH8mrsScgIrhrBqE3aEJ89T4VWqHU567OJvXxsdiOK",
     name: "Patchouli Mist",
     price: 1600,
   },
   {
     id: 23,
     image:
       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ5z7prIglIyD7GJP_igUQCpL3idKfjgUeSl6gj5V2Mg12rvy77dILEfRb4Gpm7vH-b95XWoodYm_Z1RjVS8auadna3ZC_JT8y1OPo_tkKGdsxHPaCzqxC7",
     name: "Vanilla Sky",
     price: 1350,
   },
   {
     id: 24,
     image:
       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRZ8s3dz8AgESG2LLhEW6eftN6ddhrzwqrp94K22SQBGOEiRnrrPAOfTWP6yJmuZSpinRXGzT5_AQ3rDOfthcknnZiPbmldTEATTkG0DmFbP28Q-Sz-e24c",
     name: "Citrus Grove",
     price: 1250,
   },
   {
     id: 25,
     image:
       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRBpXna3FuAEMB0QhPRIFdzZhDplz7uw3k1ojjDfgrTEHWhyeEOBZD6wyT4cE6IGPGUfoknDb1onrHR3UpxrWCL8pmhFcdBE1606nBXq7LB",
     name: "Midnight Jasmine",
     price: 1700,
   },
   {
     id: 26,
     image:
       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSeikD3_Ik65Ybx9bwdwjAsISaaxXGEA2Qarr4c6oixWSdT3QTdrVtFih4WG8Bbfd8kfLhVMAr5uJVpFspKSvINbOG3TCI5-ImKIb1HqJGpnp6t6H66ACEFXA",
     name: "Amber Sunset",
     price: 1550,
   },
   {
     id: 27,
     image:
       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcToZnK6_d5DxxeI-fME3g7qw82chHZ1_R950iDH11YBt-oVJ6BPfFz65PEzo6TyFuuRsKeYWtWKmIyJvUcpFvStbFJcADPABgugBxWtGWK8fBxGpSerqd5P",
 
     name: "Lavender Mist",
     price: 1400,
   },
   {
     id: 28,
     image:
       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTsieru7-nlhf05DhOVMTvDVlzDA8UOWejZtJ2KiUIZc02Q3mFTXOcX_ya02rc_mmnMiaJUAT9BEUNntgHxOMHSJSp4PeAoTXcx-uYM_wrC",
     name: "Rose Petal",
     price: 1300,
   },
   {
     id: 29,
     image:
       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS-bowMPHkBAKnNi0yam9tLLSslHUM82UldWpNgApHYnI6VhjAqwxuLhfhQWhVsMf1bAl28lCN5gGftI71eDWuwrLs8YUXKB4MxNC5PJhk",
     name: "Sandalwood Serenity",
     price: 1850,
   },
   {
     id: 30,
     image:
       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTEPl3_s0GwrdHnh1GXVILoM4Vw-FP1v3BrYxDjH3YsDRE-dzlDmRzXcFxtvRpJx4rJxAnsvB4i2HNArHrIBivNjBDbpOL-lVZZuOd2hbI",
     name: "Ocean Drift",
     price: 1500,
   },
   {
     id: 31,
     image:
       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRqt86EAsrFuHJ6_OiuglmH4xmlQJP1BWtDWUG2ZVtDb8a6PkW8xiPRNmJNiMjCSVJwsFiq2geOLSsL5GpFhiPuqQi0UtCKW9MJsYTvCVRJEzrXKS1Na20CxA",
     name: "Cedar Forest",
     price: 1700,
   },
   {
     id: 32,
     image:
       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRxoMaHkUf7Rw7iawGbMlARQxUfP4W2xSxvpotqSP1tolDvNnwnaafkMGEEMSAH25PWUWCu-Wm6hYUJc1p-NmAoHRbxm3j7JFIA4qvIVwKD30PirDnO0rLPXA",
     name: "Tropical Blossom",
     price: 1450,
   },
   {
     id: 33,
     image:
       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTOk7pyNK7E8O0NfTJscDpr0-qg0h3yEFSeJ_-dnip-wQQrjSj-eV8-mVn0KpZJwIOEduhMQkF6OpOnZCEWWcRQgQTnD4HLXdETAdnAJacnmD7W4VMWxE7tvQ",
     name: "Wildberry Breeze",
     price: 1350,
   },
   {
     id: 34,
     image:
       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQjhmkNq0L1aYH0zaS1AK_79WmFX54e2pF2OLU7d6T-mrvsNwcoOL9XwWpkx6ciFFcAlRi6_rffIO1RqRbA-WErvVyHZEwOjlkyotX0P6c",
 
     name: "Peach Sunrise",
     price: 1250,
   },
   {
     id: 35,
     image:
       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTbtDPWrMNZxN-dGTBKJrWwiCnj5OGBrISEPQsr6nxsrjQYNqzSWQDZquNMC0OfNQjqJLFnwxCtR7uFgEGBfsr9kBJKTZny9fS6W1Ak3HbKb_bKqryABVunMg",
     name: "Jasmine Glow",
     price: 1600,
   },
   {
     id: 36,
     image:
       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSoy_Wga96lDbuaDY-hxAKRqcLNsdih548j_WbBrg9RQigrW57Zh4ieApoHC_srtJHc0LSPpXdjAYYwtbzWokDRhUoz0kJUWzpHUKaKmJOO7Sx9_m5UYrmz",
     name: "Musk Dream",
     price: 1750,
   },
   {
     id: 37,
     image:
       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSdUnxbib5Ml-EOuYzkBAk-L3ooEyxHS98oU0cOgX-QlNLQ708rL9h1LBt7XhzCM05fFt6Tvgk9EOExlBxJRcJFbNKh_mWeeRgj42CVFl9MY1oWYNSS_Ybb",
     name: "Citrus Splash",
     price: 1300,
   },
   {
     id: 38,
     image:
       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRkgMvMMrwfNmnExVsHXbfh0dx-dozQVJrEVybyfSnPxp8oK63Vg_3Fos7dUYRtvIzOGosMYGVyxyyFaE2LgA34nNW_DggYaJAhFHmn5rs",
     name: "Lavender Breeze",
     price: 1400,
   },
   {
     id: 39,
     image: "https://images.meesho.com/images/products/248923104/5w5qz_1200.jpg",
     name: "Vanilla Spice",
     price: 1550,
   },
   {
     id: 40,
     image:
       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ_o-T2J342wJ4n9w7GUiLffOoVKK2sw6EqzO4DlFk_pzprDGAm3YNkrEdnArxwHygN0bXfJuFIOghADm2oj-QMdZL9uMtelNlgP_aIUl4",
     name: "Sandalwood Breeze",
     price: 1800,
   },
 
   {
     id: 41,
     image:
       "https://plumgoodness.com/cdn/shop/files/VC_EDP_1080x1080_001.jpg?v=1720004480",
     name: "Rose Dawn",
     price: 1450,
   },
   {
     id: 42,
     image:
       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS0SsoRLsjcIsL_JVi3nxHLjVImFGDN4KBXI2M8lOz8QmcfmDweMX0XCJAnXPCLKj4-u2Ho895bh9pyhs9LFlvdKSecg4u5vlyqv-Xsyv8T",
     name: "Ocean Mist",
     price: 1500,
   },
   {
     id: 43,
     image:
       "https://www.wildstone.in/cdn/shop/files/category_banner_-_Mobile.jpg?v=1740994905",
     name: "Amber Glow",
     price: 1700,
   },
   {
     id: 44,
     image:
       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRV9pOiwT89ZgOXxI11Lj3aSB1v-F6O1BeNXBzsDN9lmmk5DxyX4LI2uSMi-6vPECrpDfMlWP6RYKiVFaYbPMEuZ8a_BY0yjT50yfZkLpIMQKq_QPQUAU0V",
     name: "Jasmine Breeze",
     price: 1350,
   },
   {
     id: 45,
     image:
       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSdWx_xhJq3i_fHQdyBmW7ar5qhD2ysHXYb_7m4xvqy-ebS7v6y7y36mTOVh2WTTRLrk0WOFgSl0Hl5R7P4U2_IhVFW71mO6ZizIkPE0ujNHFU6GqlU3rZt",
     name: "Cedarwood Dream",
     price: 1800,
   },
   {
     id: 46,
     image:
       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxRRCOZWivmKy9T06rAKN8nYqMc7OTDww51d98e2PuatxLkC1rCv5CCxZeqDDLg8DwaciIGTgpDAIHHQvrKahBM7YhVvyc4WHzalZrOk2WCWwiKgBldTCGnQ",
     name: "Citrus Melody",
     price: 1200,
   },
   {
     id: 47,
     image:
       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRQx4mZ_F_RhswfUFirFSbHHX4qRXofFZrATsa_JXGabr65Dfk6dmY5My1JpV9ZczmD96BFZ28uv5fEVELBtzCWWQ1OXoM4bgUkzlr-Xfs",
     name: "Lavender Fields",
     price: 1400,
   },
   {
     id: 48,
     image:
       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRnfiWiXCOB0vDWq80VqdvdA8v4XY6v2bnIwp1URikOWSLjn_ABLKCkmZW0-zg4jXPBa6aHRdmHkBki3EXmdG1r_1EOZO_uAfctOfVMpkI",
     name: "Wild Orchid",
     price: 1600,
   },
   {
     id: 49,
     image:
       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTg_TNZK6UdKErxua33ia1Wdp0TZZhgKNaxbr3W61SBes1c8mvCjXg2X3ptmVBF-6wUh4V-Ju20KmPFIyY4PeWpx9e3qz-3jvVcehqy458",
     name: "Vanilla Bloom",
     price: 1250,
   },
   {
     id: 50,
     image:
       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRP-gRBhtb3YEjdM25hYNNVm3PYfUmvx3SdY0i0XHCWaPmnWwQNREIoXEVhv6nMScDPjfu_iNYqt2yycekpoIg3iGFYRHF03zl7u-xQCTw",
     name: "Sandalwood Whisper",
     price: 1750,
   },
   {
     id: 51,
     image:
       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR-NA7UZsU4C5Rc-A5yujMQkS3hY_0rzfyGzUfAhjwaDu2CkN_tpv8BKpjt0KZJ3t4KXDfj-WQ-hVUg1lMWE_voZiSB5Ak_FWclezMCTsogCQxmlx3HN2qe",
     name: "Rosewood Glow",
     price: 1550,
   },
   {
     id: 52,
     image:
       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS2hDVH6ve6Cst4ZDtjAvHZFGM46EYIcGsx4mDvZq8dTkE6p5vnapnQPoxe20kH01zWGax1JJzhmnsS4XX3-nvYvH93Aj7vGJH0NyCh_dc",
     name: "Fresh Mint",
     price: 1150,
   },
   {
     id: 53,
     image:
       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ_LeT54FBW0h5H3qplKgDgRuiMEL8bFW5Ujyuh4XxAppk3A48gVYpof5nrgpZfmJILb2jR03kGYra69yP_DqCke-BOIaLNkeEWmSX1Md8",
     name: "Saffron Essence",
     price: 1900,
   },
   {
     id: 54,
     image:
       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQp_W3bjpFhLFmc1FFxeFHl4QZzvlqab0Jl4spi4hpxTSbJZlF4uM2ek6zHiTRG3Z5o88w9GMzN9oXmrElg4Pol4eumWZhmfkn01cPeDdAELS2ALaOHeAWG",
     name: "Peach Blossom",
     price: 1350,
   },
   {
     id: 55,
     image:
       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSHYpe_jVJ5PRNmMrFhc0iKqEn5HgkbW4wyUn_hWoaeVsYpQzCam0hYdmOxhFdCCevcP4_Kf398d9eqSuc9a83E2bv65BVp4yLdiLk1BbdKpm2RVXI-ta4R4oA",
     name: "Moss Garden",
     price: 1500,
   },
   {
     id: 56,
     image:
       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS5PZr3D4q8Fm2d2UPwAVHYUFLlC-cuv3ramtOoZ8qYJ49HVJEyAW0y0wRC5NVqREisugljaTsx0npGU0t6NHg_tGtywGdvzW0jOzQepacd",
     name: "Tropical Rain",
     price: 1450,
   },
   {
     id: 57,
     image:
       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRHey4hvDy7Xc8XiTthaeoazqEsHOZw9PzLiO3TRzl0t8oAXGUTfCvrNZ6v42XsHeozxg3_l_5NBFOAeW5WdevlzLau21an4P-wCe7QA8VdUKVYlAR-66Ukpw",
     name: "Coconut Breeze",
     price: 1300,
   },
   {
     id: 58,
     image:
       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQXr3YemQhl-32-VzgGk4He5RqVpLAG9WSN32KRRzoXlPaTe-6KBfxAocOEFUkxVIL3ArAK94bmHKPK-eaCsf4HISfxwO5wgssN0E-7YtND_K4HfyGoVg",
     name: "Blackcurrant Kiss",
     price: 1650,
   },
   {
     id: 59,
     image:
       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTeEics-bcBfLVAEPXBj68W0Sf6oh7R0VZrfCczowSSyEukZUx6v8vM4SP-i9EESb87KupIVg7CqaaiWaKIGU8kGdOnguIB7p1J_SmGyAI",
     name: "Lemon Zest",
     price: 1200,
   },
   {
     id: 60,
     image:
       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTzgxxvsJ6N92eX111kYLMl_ZC7PoRBSPwBz_RhX96XOrvpyN4cLuYe_jKwFdpB3u0YE0bs1qv5-AYelcBjZdNI4iRL_zv6dpsY6cN4orMmMqfr6s3PiNth2g",
     name: "Sandalwood Night",
     price: 1800,
   },
   {
     id: 61,
     image:
       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRPnjP3Qa1C7W8J-QPaT6k4PweSUA3denhoAIAcp4YK9yMkLSstbNEFlyfmadS0zfrWZRSTfCO5hsM_OlxGJxGW0BHCKYCyxb1FRdWrTABdsDE881CIjG6C0g",
     name: "Orchid Whisper",
     price: 1400,
   },
   {
     id: 62,
     image:
       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTDITPpROJCXmGtBpn1H7SLWnR-GeaZPyckcLSSy_buP8ScRqPjRch4auUdUHpq720nx9TD9T4q84xEmSPgRA9n3iW8hLaF4ziLFOu5hFw",
     name: "Patchouli Mist",
     price: 1600,
   },
   {
     id: 63,
     image:
       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRv0VyFBAN5DbxCz7djwUO2MAlcyshM3I3K1m49bVOMId59n2FqodOEUilSBGj6C00qW5ngZx2eNGccxAIPwJlI7nZTYgy3iSXMqmScXhY",
     name: "Vanilla Sky",
     price: 1350,
   },
   {
     id: 64,
     image:
       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTupJNVJRNo15TzYwLjMLbHiWVjRvsM2KV9L6yvdJ2jlLvpnVg4Ip2aPH5BY6_MgWlIWaIrnXjMPi76iYmxiKaF-AcK7ZP0pz_18L2S_r_WciMKneztPLDofA",
     name: "Citrus Grove",
     price: 1250,
   },
   {
     id: 65,
     image:
       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS5xYMCioN9srvCwoqPTZDs-xu3OSecRwm55B5h-fI5-6CIO5c8mIiKNMa8K_sQgguciM4gXj3SSS0CibofWTXbyCI7X9LYXy4BMN6gyNk",
     name: "Midnight Jasmine",
     price: 1700,
   },
   {
     id: 66,
     image:
       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRb8hJ2_F19vBoYG4G-8MYvpmh49Qia-XUFmCoCR34eUcpGnUZ0nnmofPeyxzQN8pItZNNcoq9wtTY91Ais8LFciTaFqVbWz67X0VU1SGYQu0xCQjCYt5Ajow_i",
     name: "Amber Sunset",
     price: 1550,
   },
   {
     id: 67,
     image:
       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT4UhWGvqalXNBXuOqiVWD7M_Ro2U-L1U5cqjVCeixRvuFoV9TH86M0RkhC-d0zo7YX0Dvu2MiKCuR6wzZ0TZcsbaXQ2RIJ-MtYhxgFYHtKDwXCp0kKNJ0sVck",
     name: "Lavender Mist",
     price: 1400,
   },
   {
     id: 68,
     image:
       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTZGvDuNOGleZIP-l1-7i-q6pBzluJIJmxN_wL4MMCn_XPTlROtwhV5owH6Ms8qUqB4s-9Zh5V17erZ_56LWjrMugmysol9L6lSWTqVA_dgDfiQl5V5hUImaw",
     name: "Rose Petal",
     price: 1300,
   },
   {
     id: 69,
     image:
       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ5MkQt4foWaxnbigL0Cb8EUbGLHLy2K-vZsTVZKxOAiASvZdrkTBQQ6McqBs6qUPmyhozDBQTw6067TanZ8T5zjlYBSoZQL0XVzW9bxBVqQCtqy9i6zjcH",
     name: "Sandalwood Serenity",
     price: 1850,
   },
   {
     id: 70,
     image:
       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSr1waGTqVJXNyU0hDfm1aAemUau7ai73fnDNYySVcqTtVPBC2aiUjMC9zeiRBfnoqrOVwtnAGh-02lRUvF7Ji5kE5FtpUaQPmE1wgVjo8D3KFQJo-27etA",
     name: "Ocean Drift",
     price: 1500,
   },
   {
     id: 71,
     image:
       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSGZQBoDM0NRndLv1IgdAZ5hfQ-0F7_s11s4Xoe2CrBVOUXfC7RjXtkehyct0EyNLx5u2H5nqwWxvM9aBqARMJQchkCtx7yrseffVpmIWeS",
     name: "Cedar Forest",
     price: 1700,
   },
   {
     id: 72,
     image:
       "https://bellavitaluxury.co.in/cdn/shop/files/3_8515989d-6df1-4e24-bd1e-19b1c60ccbd9.jpg?v=1714556424&width=1000",
     name: "Tropical Blossom",
     price: 1450,
   },
   {
     id: 73,
     image: "https://i.ebayimg.com/images/g/o5cAAOSw~Wllbgp5/s-l1200.jpg",
     name: "Wildberry Breeze",
     price: 1350,
   },
   {
     id: 74,
     image:
       "https://cdn.shopify.com/s/files/1/0622/0939/2816/files/Tom-Ford-Black-Orchid_1024x1024.jpg",
     name: "Peach Sunrise",
     price: 1250,
   },
   {
     id: 75,
     image:
       "https://brands4less.pk/wp-content/uploads/2024/06/GIORGIO-ARMANI-Acqua-Di-Gio-Profondo-4.2-oz-EDP-Spray-Men-6.jpg",
     name: "Jasmine Glow",
     price: 1600,
   },
   {
     id: 76,
     image:
       "https://labelleperfumes.com/cdn/shop/files/acqua-di-gio-parfum-ad2_800x.webp?v=1698095382",
     name: "Musk Dream",
     price: 1750,
   },
   {
     id: 77,
     image:
       "https://beardo.in/cdn/shop/products/MicrosoftTeams-image_24.jpg?v=1682160330&width=1445",
     name: "Citrus Splash",
     price: 1300,
   },
   {
     id: 78,
     image:
       "https://images-static.nykaa.com/media/catalog/product/5/9/594133c8906084791143_3a.jpg?tr=w-500",
     name: "Lavender Breeze",
     price: 1400,
   },
   {
     id: 79,
     image:
       "https://pixies.in/media/catalog/product/cache/e9780188a08ae15edb442fcb34502371/b/e/beardo-dark-side-eau-de-perfume-for-men-100ml_1.jpg",
     name: "Vanilla Spice",
     price: 1550,
   },
   {
     id: 80,
     image:
       "https://ritvijewels.com/wp-content/uploads/2024/08/Beardo-Legend-Perfume-EDP-100ml-02.jpg",
     name: "Sandalwood Breeze",
     price: 1800,
   },

  // Add more products as needed
];

export default function Charu({ cart, setCart, likedItems, setLikedItems }) {
  const perfumes = charuPerfumes;

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      toast.info("🛒 Product quantity increased in cart.");
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success("✅ Product added to cart!");
    }
  };

  const handleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    toast.info("💖 Like toggled");
  };

  return (
    <div className="charu-page-wrapper">
      <div className="charu-container">
        <h1 className="charu-title">Charu Perfumes Collection</h1>
        <div className="charu-grid">
          {perfumes.map((product) => (
            <div className="charu-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="charu-img"
              />
              <h3 className="charu-name">{product.name}</h3>
              <p className="charu-price">₹{product.price}</p>

              <div className="charu-actions">
                <button
                  className="charu-addcart-btn"
                  onClick={() => handleAddToCart(product)}
                  title="Add to Cart"
                >
                  <FaShoppingCart size={18} />
                  <p className="cart_charu">Add to cart</p>
                </button>

                {/* Like as icon only */}
                <span
                  className="charu-like-icon"
                  onClick={() => handleLike(product.id)}
                  title={likedItems[product.id] ? "Unlike" : "Like"}
                >
                  {likedItems[product.id] ? (
                    <FaHeart color="#6a1b9a" size={22} />
                  ) : (
                    <FaRegHeart color="#6a1b9a" size={22} />
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
