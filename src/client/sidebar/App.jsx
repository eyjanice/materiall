import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { LoadingPage } from './components/LoadingPage';
import { SourceSelectionPage } from './components/SourceSelectionPage';

export function App() {
  const [page, setPage] = useState('Landing');
  const [slideUrl, setSlideUrl] = useState('');
  const [slides, setSlides] = useState();
  if (page === 'Landing') {
    return (
      <LandingPage
        slideUrl={slideUrl}
        onChange={(e) => {
          setSlideUrl(e.currentTarget.value);
        }}
        onSubmit={() => {
          setPage('Loading');
        }}
      />
    );
  }

  if (page === 'Loading') {
    return (
      <LoadingPage
        slideUrl={slideUrl}
        onDataLoaded={(data) => {
          setSlides(data);
          setPage('SourceSelection');
        }}
      />
    );
  }

  if (page === 'SourceSelection') {
    return <SourceSelectionPage slides={slides} />;
  }
}

const TEST_DATA = [
  {
    texts: [
      'Project Presentation\n',
      'For Rivian\n',
      'Eunyoung Cho\n',
      'February 12th, 2021\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh6.googleusercontent.com/kXjvTAMA1DSG0ZzgPZtr2oM7ons6eW8PGUtykwc4GOFSR4ID3f-PjK8_BBY_d-ER9yJdwz2Rbj02v6Vye6f1suWv4qg_hOjtPhgjyEX-_KtFYKvUEda2Q1Xrunji2g_R4_mVGp1ddBX8pDFoLb-1NjJj5F8V3PNrvsP2yujSgO4sPv7hPYKWCMmZH4VaqpWv79tWhRHfPOCly5PzAATyigocA1sbW_8iRIa-VoH0yoSFymwtLJfPDuU=s200',
  },
  {
    texts: [
      'Hi, My name is Eunyoung Cho\n',
      '\n',
      'UC Berkeley Master of Information Management and Systems\n',
      'Employee Experience Researcher\n',
      'Psychology / Research Assistant at UCLA Anderson\n',
      'Marketing Manager / Editor\n',
    ],
    imageUrls: [
      'https://lh3.googleusercontent.com/4eTIf9Tx1KuSwtFGwnLlmr7mkZvnsQvCFWwjxPqZOWzuSrCtTi8oeIHWasvOqrNdrADG-BOsmz-Ge_67-HJzPIr05ndsHp4VB-WKJ0lIctOElMaMK0YiIm9Uwm3M84JBsUywmc-H0T132eOjfVE1xy3q6qbLO1HOzQ=s2048',
    ],
    thumbnailUrl:
      'https://lh4.googleusercontent.com/wqBabUqjvJ1g8hBPY78NJy7mslPwMjC9eMot-5zGUUNDndOm40GRvXXN64VXhDKfH0ZAnhtCSV8QP2TPHS9VAjVqXNI1HXZFCPojyL5mhWv5ouZiUmkSdgXEmjMxQHpffpWA5OgsXwAKPZ90xLQlVpwMNk9omqRw724b233K6Z1xyih9K8fE9cKFWG9pBhuelfHqECbBDR66GBy9Pz5US5XoFthOlhmHEsaYBZxP6SxxTX9IJVG74K0=s200',
  },
  {
    texts: [
      'I love...\n',
      'Share users’ needs with stakeholders\n',
      'Improve\n',
      'user satisfaction\n',
      'Talk to users\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh4.googleusercontent.com/xlDWc3qgd1g6VVKAFyKdL28rtmQtMZiHoV2SDe4E6U8Ufyqjz0Yj3QQ3-keHqMp6EilGDqm_Jh6J7tO6LwCrt0rabsHJfH6jBVtW3sdlhDUH5t_AXacw60lR1fhCn-IldsDURG5HgpEM-7ab8faODCiXage6_s1n58nO8yluvdRR9mK_muoiHxVdkOroskwmIcorzlY7MJ2Zmb_OA72beGlL_GG7Vuvq4B51dhBK_6GfDjm6S1MWj_U=s200',
  },
  {
    texts: [
      'Adult School Online Learning Accessibility\n',
      'Qualitative Research Class Project\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh6.googleusercontent.com/hEdt6Ub88mmFnSkpmQwAh03oYhSadqZdnIggSG3Zfz01L5ZdYQunuLtCZh9lsN-82qrnKwXg6XIILmP0zYMXYaih8_TRwZjZp5thGZcpgoNsLymDeMXaC7AwVAzNRXbq5PNF6fmyZ0j1A61sW0XdD-F55pvxGbX2-k2ZzVkgBMLFiVnmjcp3bxf8HorlLsDwsZICn2YL-1zPW3HJG7-OHyoktXAbMzDRE3ddKKkA3y0MFRtocpAnhbw=s200',
  },
  {
    texts: [
      'Problem Space\n',
      'Adult school classes changed to virtual in 2020\n',
      'Class delayed because of technical issues\n',
      'Not much research around online adult schools\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh3.googleusercontent.com/D8C97Alg9ZRygyR92YHaPhCXkLAM1kiXBijKBOSiNYNYJ-3GK-5Ao-sWFqt3Ho363DR2cwUcH2bQBcAqPftLLSEcok552zcHHlcmeJxsPb7H58n0eU4bUIhJW3eF0SNQoQMatXBMIUGKMfjdWobpKNlwdCGoAtvHgi_wFIXEZN0vx4OkMhNOUUooNPYJnVlgOXc7Md_vyhw0MXSBH5SFzGVeziriqhiHv6YIbVaQgCbv6zE8e6qhho4=s200',
  },
  {
    texts: [
      'In-person Class\n',
      'At a local high school\n',
      'Whiteboard in a classroom\n',
      'Students sit in pairs\n',
      'Class Format\n',
      'Virtual Class\n',
      'Synchronous Zoom class\n',
      'Teacher’s iPad as a whiteboard\n',
      'Everyone stays at home\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh6.googleusercontent.com/SOtOuLJaBVbOSoCeWt2qhVwed9h5I7kaHheX1Odr4mQWNrXvNAPRcoEJsBKoJlEcVvwfbudL6yJdolR4BWB6jhJX1x-MuGhbVSRShUWI92X_9a-iNeLMOn04t3cdH1IBTpDd6Blj_BqAIcEL4sFv_qk1NqJL5m9NPzvsYpnjsZY22eus6ejfN2imLjIHs1QqkBhSIYzgOVgsbZwfcJcHl_gscDNkmLqlkal1V79z_otmZMZP-L49kio=s200',
  },
  {
    texts: [
      'Why It Matters\n',
      'Opens more opportunities for older generation to learn\n',
      'Most adult school classes are now virtual due to pandemic\n',
      'Older generation has difficulty in adopting new technologies\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh6.googleusercontent.com/7073TQEOOzHIrKip9pNpeyYXKYUxyLOu1C1NvcobpoksOz7-e5Kk_NiaaGx2h11A_GeVS7vdReTvdwZKOS_U65BfetR2itH_MVE8uUuNLxg-cHHKXIoiPbtrBqsl8KwS-Il90BeNYE1wbRAp2-qbMLSfM3kp7hzEUXGRIdb-ShwN3_mHUY7CMXKnBhszaLvneLmBzLKyJ-TQqIM181UmZg4s8mpG3fwkqakE4fm73Pd9ad9le_9nV2U=s200',
  },
  {
    texts: [
      'What does online learning mean to adults in an adult school Spanish class?\n',
      'How do they experience online learning?\n',
      'Research Question\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh4.googleusercontent.com/DIbU7x_twu954n9FjbxYmuxK0qKo4SneCxakDyfQa0pJ3fwwjINljL_zf3FpQV4enbARJUUWcEdic1BjDKlZioTBy2J_pt4zQ8LXNfEKyjdtJvWjlT1xW1BO2Mk_IHsjGRD8r1rMhcZV132nWKjsSba0gAQrRXjnL3gqv-gQIhYD4XYRegYEr49dyTkAqCZ18j47cZFsiejLlofH6_3JzgdjhOS0SniPHwSyPuZfAzhOLrV9H6nFcUk=s200',
  },
  {
    texts: [
      'Methods',
      '\n',
      'Interview\n',
      '01\n',
      '02\n',
      '03\n',
      'Observation\n',
      'Diary study\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh4.googleusercontent.com/E1twojdYrzWf9lo7r629icgakLgJaKKW9qP0ZyRWSPSoVxFs1K5CEpFyvTAdynwimW2kaSqpKJKD0VsR1uPC4-zRmWWcYRnsbaHBsvGIoXDBn_IaV42f6u2kJCDhHADN73kXZSKqv6ya3YAkMjO13jZnIVS6QB6pLjo0eMmDzwUX5Nr8zZi4cFFDeoD2cw4q77HL015lLjF8ZqszmDCoau9HplOF3Xh_rWrhp_vtP51pZ-HVG3M-M4I=s200',
  },
  {
    texts: [
      'Methods\n',
      'Interview\n',
      'Persian Woman\n',
      'In her 50s\n',
      'Asian Woman\n',
      'In her 50s\n',
      'White Man\n',
      'In his 70s\n',
      'White Woman\n',
      'Over 65\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh3.googleusercontent.com/l3dNuWpT6GipdjI0GcXtifDjNu18OZ-j6qYvYXzzEMdQzh16VUDE_rtIaVqV24WCrgrMqkX5_EvsGLpG6ESCv4gje7MQK93UzEwwicZQBmGdJzXRVAw3s6kG7bWpFukehjUzjG1mPyDnPs4byfcMN8xHwN3foROYySwT1OT6j4ADSX7g7LnDS5ZLNwfWBnl6nwisk5dHq5BMwz9oCUSdnXdtcGPF6ceHZHFaMk40M9LebmzrdRtFxBU=s200',
  },
  {
    texts: ['Diary Study\n', 'Methods\n'],
    imageUrls: [
      'https://lh5.googleusercontent.com/uPkDAIJ-uNMdJcgdqQIgeQt2hX1V5R1GunwBDMD9jSagxC9MaCuSZ_hx-KDAghfKsn87pOhPXEYWh-jLbDLW87VtUbQfofX2Lhejq-ILcWuSAXItEvGglj6nqetPJEftgvk7S4HeWKsOdn4F2AS3nbxZAGF57ocMfg=s2048',
      'https://lh4.googleusercontent.com/fJa2K92UxNYQ_ijbEZe4NmjSjOOPkkECyhbmso5c2la6DQnR7iNYjInCcq6H6jXbNhLc7o0C80qNntVqBbplbk2uNKFaQjVTy3_adXfKdAsnM5lQVb5scv7SRlXu7lLx-si6znSk3YU7rVwHXhvUPYfVegWeNbkUeg=s2048',
    ],
    thumbnailUrl:
      'https://lh3.googleusercontent.com/N-FB8RyKxmF_SNa-ruMKzP6UV67HE3uQBRay6sqNNS2qzjHxYwIi99gNnFDIh6cr8r7q4EeRXOav5WG-_pQWFt-Ej2Oie1k4Ih_x0baV5obXO0pVAbbLMvJ-nIhHYTz9Mu9vwz4uKVNECvUFT9QSlLIV2k3b_kL8cJkBX9WlDTzzdVkh19_2VqK-4vVUe_gSMUsGC-_GxBh-WVFLYTDmx3ej76zlRWrh3OPNFcrnl1skUfZjPXrY0Ds=s200',
  },
  {
    texts: [
      'Methods\n',
      'Diary study\n',
      'Everyday Spanish learning experience for a week\n',
      'Follow-up Interview\n',
      'Details about the learning activities\n',
      '01\n',
      '02\n',
      'Asian Woman\n',
      'In her 30s\n',
      'Takes 2 classes\n',
      'Diary Study\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh3.googleusercontent.com/C_9EcIieVCXYY8RuJytijp4z1hHi-4FNkjHCebQgH8qt-RgWywMfl3NzVZFBA4kzruQrg_99TlwJDQUTmSjrFIMKlmpfLJ04uCwUyzzV2Nai3RA9ccqtv-6-HOuPgsEKL61SbgDhl4UpgYVwFzzXlcrOzPHXXa4m-qqL3j04FUCK4JFu2hGYcaWqzK41fueUdOoC3NXVUf8MgxqrnEbmUrDgumoDlGAQGY13J84coM3HiwvvNiimLp8=s200',
  },
  {
    texts: [
      'Methods\n',
      'Observation\n',
      'Participant observation\n',
      'Teacher uses computer for her camera and ipad as a board\n',
      '8 students in virtual class\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh5.googleusercontent.com/MzMRRieZlGU7kNyliAK1ejc33EQ-nAGB6vUaE83w7Ffed_iZ_7Zl2g3OdJ-F8cGG6qGpNSaF-7KRH4DUvUXjznP1qudjLrjgntSrSKv2tzjANk0AndedRq0pLfW6MyM3umTAzdg1uIy8qZhJmwug9vp2qvj71w4kUBXPh_PC5tbWsFWqkoGX-Jo-uSgeF5JooG9b5luXF2uptAIbwqIB73ZsieuKwrj6jFwxFUNhTxjVOiJ_UUmD2oM=s200',
  },
  {
    texts: [
      'Result & Analysis\n',
      'They felt they were still getting benefits of the learning.\n',
      '\n',
      '"I am grieving over the loss of face to face teaching, but I\'m still getting the benefits of the learning."\n',
      'What does online learning mean to adults in an adult school Spanish class?\n',
      '01\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh4.googleusercontent.com/CvCXopxpkNh7Wffgr90POPVh6xWllgAqn8Y0Zho6lJADUhU_bySFxUYUXgz34yfU4DNgA0fTZcQ3uK-lOA29gN8wMVcakDhK9d01WnG9KQtZ2ME0rHK2orK3CKBYjn5dh0bH1P5RUAcshgFHh48kzkYwBSnXbqbrUz1WkC6RLJzwmeMja0AmXqezYsiHSXjeuMT3o-xNxouf5_m-QPrPudfJCRoMAyQmTrwzq_hhNObKeMeZYYyg628=s200',
  },
  {
    texts: [
      'Result & Analysis\n',
      'Saves time and energy\n',
      'Smaller class size\n',
      '01\n',
      '02',
      '\n',
      'Benefits of Virtual Spanish Class\n',
      "“I don't have to go anywhere. Up until two minutes before the class, I could be doing something else. So that's really convenient. I actually wouldn’t mind staying this way”\n",
      'How do they experience online learning?\n',
      '02\n',
      '“This class as engaging as if I were in the in-person class because the class is small.”\n',
      "“I feel like it's much more one on one now almost.”\n",
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh5.googleusercontent.com/alpAbWPU1_dmobYY5nioZdz2_Fva6YdCTEzB17oiz0jASZnE9vvgKq-e2jlAmkMDOsz1xz2Nhdubr3T6KXuUimWricK3b8SzBxbMXl83FHwFrrT2i59dT7PnlnHhVvVm3T3eKGnKIem5df1iSwdY_NvaIzeFUbv2r8uZ09GRT_9LvzOVnkEtn7VK64s0sRhxby3adIs2YE3ENLAc0AT_6silEvvKGZwaTf6rDw9L0FRQ6yy_jOeyvfA=s200',
  },
  {
    texts: [
      'Result & Analysis\n',
      'Challenges of Virtual Spanish Class\n',
      'How do they talk about online learning?\n',
      '02\n',
      'Technical difficulties\n',
      '01\n',
      '02\n',
      '03\n',
      'Less social activities\n',
      'Interrupted by others\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh5.googleusercontent.com/36oKOhWofKRp8Hz0rUlMQYCxIBdeawuGqa5pKxiPf1witr9VDT3EfccOmGHK_zISJ-kqJA3H0ZrdkrqjEZ7N0-mwBV0TswWs25hFF3D-Od3t_rnQvGX07uix2v-nWcrA380f1iflnXQCB3QR7EoJe9TVqRILALPOSFZU7mjogsuDx2nMTXZjd4T535yJgFIT8SvbAnt5YelibXQonFFc2WxeMGwd-_nFOdL_w-fnsYmYbU3YrMLIbzk=s200',
  },
  {
    texts: [
      'Unstable Internet Connection\n',
      'Was not brought up in the interview but spotted during observation\n',
      'Result & Analysis',
      '\n',
      'Unfamiliar Tools\n',
      'Google Classroom\n',
      'Spent multiple sessions just for accessing\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh3.googleusercontent.com/Wxj5FjnLXBcbmw9GCo8zjh4dmjI--SI6FBvctlGUWSjs-ekXJg4Pc2t9DfL8ScivRz06SlHQS4dh4q_KyslCmkodw0_t0eqw2nxArti80IAQf5yxCplKZg7wygSQrgd68aS1LvFtNvxASbyUFTN9n6nKwDXlABZgnp_sXqNlsHs-ukcMFbXX_dqOxw8neNYrwifdJgypiFJoGS5mlcxVrDjjniBywOaMeh34Md-6ICN1s_xiVbKTu68=s200',
  },
  {
    texts: [
      "I have to keep the link to the class protected, to make sure I don't lose them, because I'll never get to class. That's really a problem. I should figure out how I keep those links protected on reoccurring.\n",
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh3.googleusercontent.com/oYlKBb33aBOZdVr6_Su1YkPz9kaQdNqqTJm1Y3Aw-kk4me7J16mIlSLspWcRgY3BSwAw39DXxHWL3RFPYj6DEwNtJyfUfmR56uRTzAYCHCiS5OfP8v2dXVisVqImEEkBFcQIqdAGSluyyFEWGrkOhGsTQOBOedyyTOD8COV_odUC4LrmvUP0F_F2egD2lujt2KNr1kxYMHKYNtkmfRTrBSXCkieaWk-qW7nHMW4FM6Ec_5mAykceyGs=s200',
  },
  {
    texts: [
      'Result & Analysis\n',
      'Challenges of Virtual Spanish Class\n',
      'How do they talk about online learning?\n',
      '02\n',
      'Technical difficulties\n',
      'Less social activities\n',
      '01\n',
      '02\n',
      '03\n',
      'Interrupted by others\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh3.googleusercontent.com/Giiq0hyNpQOFLu-pG61p6NCNlyM0JIuXYA97c3zXTeYelGdoEb985Mes-H9rEsjf4ErL6nMmu1xwH4b8jy73VZ5bXA6ErbQwCfEk0XSnbFONp8QJr9-bpNRwZfMsrWr5W4P4nqqsie9_88YNxq3d4fbvoJqvwNA4F4RV9n2OzXF5-s4_ANVHnnwoGOqZwOTsYuZxkOnlXXvee82ETx7XSL4_B8CvT7bO4FyUfMlLS4U5MDbbb8Ym_3w=s200',
  },
  {
    texts: [
      "There's a social aspect that's totally missing in zoom. I met a couple people last summer. We met for a coffee and some Spanish chatting as well as some socializing.\n",
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh5.googleusercontent.com/LT7y00bgLuphBvjsHyUjMXl_Ex7P3RdQQ7q0yDYEzJNKf8FV83-Sw-oHW02ai95Mnlh7Hi7Sk_tn9ib7tkM2RXGeavOn3Cw93dNLSBElpUlwBooY_SXc491GswY0g8hzg4OzDiPAEUZGKlQJ4q_Q5UuLzwjfOn7sTWJs5zAlefKfQ1xZct2lotYWrrC9IJepcWu_bsaci4GwNE5c-fF8woJ2Pf67w084v0Lg47T0CdImexbfRiXw74Q=s200',
  },
  {
    texts: [
      'Result & Analysis\n',
      'Challenges of Virtual Spanish Class\n',
      'How do they talk about online learning?\n',
      '02\n',
      'Technical difficulties\n',
      'Less social activities\n',
      'Interrupted by others\n',
      '01\n',
      '02\n',
      '03\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh3.googleusercontent.com/3qCsdLZe61V8ieuo5_oA2hDnVt-jgoLVV9weeQvpjnsR1X9RjlqeSkOu__BnlAOlDC9j6IqNOSpQRKsQRSpZm0F5_yiRxnrKpNn3AlBlfmkr7n8BI5qI_3qPCBBHqx9IFlquNPoSxrzgJnE4gP8e0rHHmpOeNoC-fCOiow_5aKtjgdRaUT0B_77Bb83SFBWBWAKhX90AoDZZqqEnf3R1evsnqN4D6W3gR75r6DcJ-lTXnux6y-Xq0bE=s200',
  },
  {
    texts: [
      "She acts like her personal class. She's so loud. She's talking over the teacher all the time, it's really hard for the rest of us. \n",
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh6.googleusercontent.com/rZKPghdV0H71QgXt4FI5exo825BsDYo3RkCwwfAiMPRtRt6TrUMiFiuKWbMIFDb4T0L1MMefnd8rSuHNGS0XZk-SC8Nkif8oQjmTpWiSQnfzAdEuPAdieICu2yAXVxHE9U2ptQiMHouRGMijEC_GGlwpbSZq9_i0GCflbeu0urjPkzwjD6hg-IAPwZ1DMOlXyajsnou59WQ6P0Aqj6P8nOtfw1tlzdu0jQgpClatcof9799rbUacuSA=s200',
  },
  {
    texts: [
      'Virtual Class Design Principles\n',
      'Syllabus should include expectations, tools in class, and the ways to enter the class.\n',
      'Create syllabus for the class\n',
      '01\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh3.googleusercontent.com/1JOefjLOjU5unWEdjt6khWolaPVgimTXm1XmoYzXRidgppabi5Lg6ULqHZ64bHYviMxNBbkXvcirs_7h5ygSm15Il2AApmGU94pUE04WQtDp3OgZJHk6R-qNCKr3oT78TqqqA0iiUh1S4gMiPyuw50EGKzG_Vl4Rw9hoKcNRDO4gSAsHnUuh_-3lqeaL_i3EZ2Yqn0cMOS3NIS3aIQob4J8uYmujKE7jhbGfh0cQBD1pOf4fwA13XRM=s200',
  },
  {
    texts: [
      'Virtual Class Design Principles\n',
      'Syllabus should include expectations, tools in class, and the ways to enter the class.\n',
      'Find out what technology students are comfortable with and design the class with that technology\n',
      'Create syllabus for the class\n',
      'Use the minimum number of tools\n',
      '02\n',
      '01\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh4.googleusercontent.com/_OeDJLwzL5T_7HuNcC0X8I-1hwI8l3ZHcNQQ0fw3htG1X97YYh5ocQ2Majxm9y4p4sUvovysZkMZTmduux-T02z7z_YuX_47xZ7UWk0k0pV7G3fDoKHd0czSSFeytvuHz82gQp9wTxFitoOf3JlEHSHPKJac1qn7mm6JSt18BUTUpIDIcjbzo_FhfzUxRUTpTacjoq2udrYNnM_fy0BKr0h-pt3rxNO1OSe-jUtfYEtIkneRwEQkswY=s200',
  },
  {
    texts: [
      'Virtual Class Design Principles\n',
      'Syllabus should include expectations, tools in class, and the ways to enter the class.\n',
      'Give them the opportunity to talk to each other by sending them to breakout rooms\n',
      'Find out what technology students are comfortable with and design the class with that technology\n',
      'Create syllabus for the class\n',
      'Use breakout rooms\n',
      'Use the minimum number of tools\n',
      '02\n',
      '03\n',
      '01\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh6.googleusercontent.com/JM4kxRI91mnfXfV1JNf-zxkavenJ_UtS9ms8Dxe2AjwGoproJjyPZmWD6YbP3DdQLKcZVdMxeHZsKg2RBISghfa5c3zHKdrmj2N84jUT66XPOEfv1czTvru81gj4HtxO586A999S4hEtK1mygGUu_oCEbh8poVCqtV1_5uEK8cFhAF4xlWNVVA-_M1cFsOilvRmt_RtaQJywu8ZCWtTSO-xyZi6cHjRwjx-isOBv0AhFXPFqbWI54Ak=s200',
  },
  {
    texts: [
      'Implications\n',
      'Interviewees were the people who chose to stay in the class.\n',
      'Interviewer was a classmate of interviewees.\n',
      'Interviewees might have responded based on what is socially acceptable.\n',
      'Limitations\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh5.googleusercontent.com/tN_yQqQigV52Q0GZYwmuTUWqthFD3JptHx0XrvOEEvywfGTpe7EZTlmllGrhg7VQCR62-am5_Ki29-I0TPWJX5-lJPToVZ4d4BKaDfGUNGoklpKegze2YU8b9Zeded4XMeBa2HhOYOGDexFq84oVs9l8Yy03ZG4uSNGL26c5s1mWt25BcvopSbH1zJsdI2knkOt6nhvEzNpgyvMimFxzt4pf5rqasEUi2eHl78eU-pc8QXUP9jJXwNk=s200',
  },
  {
    texts: [
      'Implications\n',
      'Interviews with people who dropped after changing to virtual\n',
      'Diary study with people in different class\n',
      'Observation of other classes\n',
      'Further Research\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh3.googleusercontent.com/qGIyn-_SLb6KW1O0qLsbgvRyyx0wM27p8aybwJfd6fKsA6HCZgcwt7cUUCNidn6_kOBNlPHEjwtY1a24v1FZTdDjHPViE_CLIyVXVlV1J7kE5VR8MLKFb7CX-T1GnT5msZQR8Rv2ETfxEVDD_Xia30Gqa5sBdoCUDCDb-pBrsEs0gNihqs6Vc_5UkYumsUm-c3_oKyT7rY9KTlBpcN0WzfP5IpLNuOzjozAd7L34nusbLdHh9iK363Y=s200',
  },
  {
    texts: [
      'Implications\n',
      'Graduate students in their 20s had not experienced technical difficulties that adult school students had.\n',
      'They also did not talk about being interrupted by other students as students mute themselves or instructors mute students.\n',
      'Comparison with young adults\n',
    ],
    imageUrls: [],
    thumbnailUrl:
      'https://lh4.googleusercontent.com/mHYA4mabnfzcFFP3TowCbgzUAvGDFyT_CrF6bRmlpnClh6h9ppKmhQM6glT54JEYsgxVX9ZALQ8xYE701_Hm9QAmTsq3XohcfFpCEhUZk9InQC9vhZhT-YbvLuy4kDkUXkTtq1ng6BD12Twf66fj2NHwC65bT8AKpmuAzlBBqoEOTM-IBLKOwKjE1zh9EvGgUdoQnrlJk-K6O6ZCVvUF6_YQzFUljJ7FNsQbEmBds8FqHjA2vKSz5Sk=s200',
  },
  {
    texts: ['How can I apply \n', 'my learnings at Rivian?\n'],
    imageUrls: [],
    thumbnailUrl:
      'https://lh4.googleusercontent.com/-TxaCqlmsg-ewTsw37SdW0xvolzMXjYNa4M2bV0OIPxJjHAiWuUfmkQhpVDQXQkYJ8RThYSKn36NgKgZG5_xWGxzSD_siqzgbWRLrz9Zv-g40BtBIjn8oxR60n-x4jn3tbwG4QPsVk1Rk8utWG9jHVKgZLAsbfubL8kMkxMg61xD1mizqWumkE7jw7ufZxmL91xHH9kkDD7KTdb4PIwDWuFCn-V87q9-4xkmhxJTSauMKCyGMXT1uq4=s200',
  },
  {
    texts: [
      'Implications\n',
      '\n',
      'New Electric Vehicle (EV) Buyers by Age Group\n',
    ],
    imageUrls: [
      'https://lh6.googleusercontent.com/6fD8CPZejncla3GtiPq5BdheZ9iKz8a_bZxszdTxgoANB4eYZQW3em9i1JSb7EohjbZKxtMkEKxDDAuZBi1j2jBCjCv8l_V8zi13uxib-ZMk29K4P4A8vxhVu4oY5xrGZno220abYDndPo2g4uxGhn19pbyZa7cbBA=s2048',
    ],
    thumbnailUrl:
      'https://lh4.googleusercontent.com/SbINSpJLOIEcOkQVIiLWXZuAZ_gb3Qc7ebmvdxi-PzcqF7RG0Ky36rA6XLW85rTVChjq8J6xcAYZeKqNprtkMrLuC-Wzr_f8s-2GGwxLMFQ5dt51TbOJd6BGqNm8fECnoxXuNVqZsAXxDDixdm_q5yTF-KK-2crrUicJ8g6551uthKY64-_IJM2aS9XHbuk28TYFYqiyv5Ly5-Qks7pREN9AeobG7-qDRA4VnzXYC6yUpADkug6bLyQ=s200',
  },
  {
    texts: [
      'Do you have any questions?\n',
      '\n',
      'eunyoung@ischool.berkeley.edu\n',
      'eunyoung.blog\n',
      'THANKS!\n',
    ],
    imageUrls: [
      'https://lh3.googleusercontent.com/01wQVM7kj9cIWJAWyvtexDz25vu3kq97ndVo2J3jDYECwOYLxHFtUgx1AbHGZ4F7f7FTELY7qfIHNAb0xcOXPVMp0CzYEYF3EmSESdieNSPduItoNDI8acfRCszYSUzlPxWILgXtHz3hJRED5Lr7tBVcU8YASFye6A=s2048',
    ],
    thumbnailUrl:
      'https://lh6.googleusercontent.com/fqG9NMjFR9SgFCLD7Pn3SYHwb6HpmI07HszBCowPgxCzzU-QO4wiALYxE6DVIkYLdKc-gJTCWqlgh6szIw4nxhmStLgBV7nXn6ZrlACCEPlZlYBcjKeTHttGLKnTtK-xXtR1NgZcnBnwxkIWbJwWQQijMAjDTPKqXEpyq8UHtcohSVcBITsIl2MLTgai9GRwqcgkG_793vjKJreeSNps17JHsl223Sw68G6kN_66BsIxF7NO4i7mfsM=s200',
  },
];
