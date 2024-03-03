import React from 'react'
import {Link, useParams} from 'react-router-dom';

const SingleEBooks = () => {
    const {id} = useParams()
    const idRelatedBooks = [
        {
            id:1,
            Books:[
                {
                    books_id:1,
                    BooksName:"12 Rules for Life, An Antidote to Chaos",
                    BookLink:"https://drive.google.com/file/d/1HnOcjU0shVP2gxHDPToIVKYeXg30nU_6/view?usp=sharing",
                    image:"https://i.ibb.co/47zJzPr/12-Life-Books.png"
                },
                {
                    books_id:2,
                    BooksName:"108 Proven Split Test Winners",
                    BookLink:"https://drive.google.com/file/d/1BW3bxVjMOHmV8IFYOG0-IldRMh_TOtEU/view?usp=sharing",
                    image:"https://i.ibb.co/mBpYXWf/image.png"
                },
                {
                    books_id:3,
                    BooksName:"925 Ideas to Help You Save Money...",
                    BookLink:"https://drive.google.com/file/d/10GIPfxKCohzKizXKpwphYtEeQ6FGDePh/view?usp=sharing",
                    image:"https://i.ibb.co/fNdtGCL/image.png"
                },
                {
                    books_id:4,
                    BooksName:"abraham-hicks_30_day_work_book",
                    BookLink:"https://drive.google.com/file/d/1i9GcBBPSNKJRreKGnKkwhPZhAG-x8zAP/view?usp=sharing",
                    image:"https://i.ibb.co/x8T8bFb/image.png"
                },
                {
                    books_id:5,
                    BooksName:"Agents of Babylon_ What the Prophecies....",
                    BookLink:"https://drive.google.com/file/d/1RGmTrL6c7cqHnmnkKtWl6pl0JgtiErQq/view?usp=sharing",
                    image:"https://i.ibb.co/mBwVhVy/image.png"
                },
                
                {
                    books_id:6,
                    BooksName:"Be a People Person_ Effective Leadership....",
                    BookLink:"https://drive.google.com/file/d/1l9n0cxgcyGzkhJMW5VE_oc2VkC8sCRSV/view?usp=sharing",
                    image:" https://i.ibb.co/YDKY2Hm/image.png"
                }
            ]
        },
        {
          "id": 2,
          "Books": [
            {
              "books_id": 1,
              "BooksName": "Lethal",
              "BookLink": "https://drive.google.com/file/d/1gaLQhDQRD0n3PT4JBxdQILkg9DHh1bWg/view?usp=sharing",
              "image": "https://i.ibb.co/pJ81zwF/image.png"
            },
            {
              "books_id": 2,
              "BooksName": "The Startagey",
              "BookLink": "https://drive.google.com/file/d/1dq4VHvbtmpRP213xhZxuod6gf_Mr_h1e/view?usp=sharing",
              "image": "https://i.ibb.co/TWytVxz/image.png"
            },
            {
              "books_id": 3,
              "BooksName": "Beyond Positive Thinking",
              "BookLink": "https://drive.google.com/file/d/1cGsWSMDFHAoEh5Ex_XXSVke-VqTCPGs4/view?usp=drive_link",
              "image": "https://i.ibb.co/vDJN9FM/image.png"
            },
            {
              "books_id": 4,
              "BooksName": "50 Success Classics",
              "BookLink": "https://drive.google.com/file/d/1cmdKYHdtk6ouSOCCVlEgW0GhOo1-nVi1/view?usp=drive_link",
              "image": "https://i.ibb.co/HVG1c7x/image.png"
            },
            {
              "books_id": 5,
              "BooksName": "85 Inspiring ways to market your small business Jackie Jarvis",
              "BookLink": "https://drive.google.com/file/d/1bMGlNjyC3pxNV8_aKWg70su3mxEFCmPr/view?usp=drive_link",
              "image": "https://i.ibb.co/6Z87rCy/image.png"
            },
            {
              "books_id": 6,
              "BooksName": "101 Crucial Lessons They don't teach you in Business School",
              "BookLink": "https://drive.google.com/file/d/1cQUINDWL3ELexi_rJhVrnmldY0n3qSUF/view?usp=drive_link",
              "image": "https://i.ibb.co/2YCrLMg/image.png"
            },
            {
              "books_id": 7,
              "BooksName": "100 Great Business ideas",
              "BookLink": "https://drive.google.com/file/d/1fKJL-Fk7zuOUZ1BsF8cfuE3_nljKGUMk/view?usp=drive_link",
              "image": "https://i.ibb.co/b2bNKpp/image.png"
            },
            {
              "books_id": 8,
              "BooksName": "A Beautiful Mind",
              "BookLink": "https://drive.google.com/file/d/1gOiZG1ci5tnbeJNTXikbzu3ZdZPnAcK7/view?usp=drive_link",
              "image": "https://i.ibb.co/xhbQTMZ/image.png"
            }
          ]
        },
        {
          "id": 3,
          "Books": [
            {
              "books_id": 1,
              "BooksName": "You're On",
              "BookLink": "https://drive.google.com/file/d/1j4QcQ63p6AO6ln4SJr2XzyfeGCrzI8J-/view?usp=drive_link",
              "image": "https://i.ibb.co/92rhhyh/image.png"
            },
            {
              "books_id": 2,
              "BooksName": "18 Minutes",
              "BookLink": "https://drive.google.com/file/d/1hsTmxdRNpJC9hkyhKQeR48CJOmBJ2sc3/view?usp=drive_link",
              "image": "https://i.ibb.co/WFpNv3C/image.png"
            },
            {
              "books_id": 3,
              "BooksName": "1200 Studies",
              "BookLink": "https://drive.google.com/file/d/1l_nlhm50Bx05haKpkyMr0cOlQiP7ZkiD/view?usp=drive_link",
              "image": "https://i.ibb.co/Q63P4PC/image.png"
            },
            {
              "books_id": 4,
              "BooksName": "AI in Health",
              "BookLink": "https://drive.google.com/file/d/1gr4Oy-y__V5h6LvBP-75Ot0wXBua4hUw/view?usp=drive_link",
              "image": "https://i.ibb.co/tx6Gxsw/image.png"
            },
            {
              "books_id": 5,
              "BooksName": "An interactive approach to writing essays and research reports in psychology",
              "BookLink": "https://drive.google.com/file/d/1m5RLAXoffkBdOqjYgcSxictbGtGQQyc-/view?usp=drive_link",
              "image": "https://i.ibb.co/cDzn3BP/image.png"
            },
            {
              "books_id": 6,
              "BooksName": "And I Quote",
              "BookLink": "https://drive.google.com/file/d/1h5BcqD3DNL6g-lvIBFSmMZAh1ApmjxWz/view?usp=drive_link",
              "image": "https://i.ibb.co/fYcm2Zk/image.png"
            },
            {
              "books_id": 7,
              "BooksName": "Answering Tough Interview Questions",
              "BookLink": "https://drive.google.com/file/d/1l2m7_zQqgZhKa18MgRDappOV-dLuBLDR/view?usp=drive_link",
              "image": "https://i.ibb.co/qDcQ19T/image.png"
            },
            {
              "books_id": 8,
              "BooksName": "Anyone Can Sell",
              "BookLink": "https://drive.google.com/file/d/1l-RwopnCePkN62bAqxpuDsxwxqLx4Cf1/view?usp=drive_link",
              "image": "https://i.ibb.co/qYs349R/image.png"
            }
          ]
        },
        {
          "id": 4,
          "Books": [
            {
              "books_id": 1,
              "BooksName": "13 Steps to Bloody Good Marks",
              "BookLink": "https://drive.google.com/file/d/1wa_FhFny-M04Db4KQhxoEYkn2V2kLcKI/view?usp=drive_link",
              "image": "https://i.ibb.co/gS06D3k/image.png"
            },
            {
              "books_id": 2,
              "BooksName": "A Citizen's Guide",
              "BookLink": "https://drive.google.com/file/d/1vLrgYUqfgIuxBCSG-laVOUwx9JC_2JU4/view?usp=drive_link",
              "image": "https://i.ibb.co/v3GWr3V/image.png"
            },
            {
              "books_id": 3,
              "BooksName": "1000 Great Quotations",
              "BookLink": "https://drive.google.com/file/d/1v2nARtqD57sycdErIqRhOTz-gsyRtiXZ/view?usp=drive_link",
              "image": "https://i.ibb.co/8NLwhy6/image.png"
            },
            {
              "books_id": 4,
              "BooksName": "1001 Quotes And Sayings",
              "BookLink": "https://drive.google.com/file/d/1v3pIAgxxcsLgp6sBgAeakHsjtcFtm_rA/view?usp=drive_link",
              "image": "https://i.ibb.co/hYs8Jb8/image.png"
            },
            {
              "books_id": 5,
              "BooksName": "1001 Smartest Things Even Said",
              "BookLink": "https://drive.google.com/file/d/1v3pIAgxxcsLgp6sBgAeakHsjtcFtm_rA/view?usp=drive_link",
              "image": "https://i.ibb.co/KrNYXKm/image.png"
            },
            {
              "books_id": 6,
              "BooksName": "Inspiration Quotes",
              "BookLink": "https://drive.google.com/file/d/1uTk7VNk0fF8fpRRHBU7L7uYbdCzK2VJh/view?usp=drive_link",
              "image": "https://i.ibb.co/7Gpmkdk/image.png"
            },
            {
              "books_id": 7,
              "BooksName": "Achieve Your Full Potential",
              "BookLink": "https://drive.google.com/file/d/1uTk7VNk0fF8fpRRHBU7L7uYbdCzK2VJh/view?usp=drive_link",
              "image": "https://i.ibb.co/br9wCcW/image.png"
            },
            {
              "books_id": 8,
              "BooksName": "The New Volvo",
              "BookLink": "https://drive.google.com/file/d/1wZaHSP9Osuc52ybXWi_rPD5VOLQ9ORBw/view?usp=drive_link",
              "image": "https://i.ibb.co/xCVw7LL/image.png"
            }
          ]
        },
        {
          "id": 5,
          "Books": [
            {
              "books_id": 1,
              "BooksName": "Laurusnotes: The Lost Keys",
              "BookLink": "https://drive.google.com/file/d/1oUjGg24yjgPcpaK6W7CHQVhMuyIb9R-h/view?usp=drive_link",
              "image": "https://i.ibb.co/DpMKM3T/image.png"
            },
            {
              "books_id": 2,
              "BooksName": "Outwitting The Devil",
              "BookLink": "https://drive.google.com/file/d/1qHjhVI2VTh8iBN2LGwcivSRpcO_g8KhS/view?usp=drive_link",
              "image": "https://i.ibb.co/26BM9rw/image.png"
            },
            {
              "books_id": 3,
              "BooksName": "Zak_George s_Dog_Training_Revolution",
              "BookLink": "https://drive.google.com/file/d/1mxH0VGUQbc2ApBPrBgDwrJGHv56XHP7l/view?usp=sharing",
              "image": "https://i.ibb.co/Gkm3gRd/image.png"
            },
            {
              "books_id": 4,
              "BooksName": "Unhappy_India",
              "BookLink": "https://drive.google.com/file/d/1rmS8mwB8_850Su55ZtYme-Q8yEg0XAkH/view?usp=sharing",
              "image": "https://i.ibb.co/MB19tBc/image.png"
            },
            {
              "books_id": 5,
              "BooksName": "Torah_ The Five Books of Moses(1992)",
              "BookLink": "https://drive.google.com/file/d/1rmS8mwB8_850Su55ZtYme-Q8yEg0XAkH/view?usp=sharing",
              "image": "https://i.ibb.co/h18Xqc7/image.png"
            },
            {
              "books_id": 6,
              "BooksName": "Three Mistakes of My Life",
              "BookLink": "https://drive.google.com/file/d/1smOQ70eTRWE543AQ0oVeggbU89Xevmen/view?usp=sharing",
              "image": "https://i.ibb.co/RYg0kNm/image.png"
            },
            {
              "books_id": 7,
              "BooksName": "The Girl of My Dreams",
              "BookLink": "https://drive.google.com/file/d/1nLxhNESduk-N1m6BGI5k60oo1lKFmdm_/view?usp=sharing",
              "image": "https://i.ibb.co/xS7pMsm/image.png"
            },
            {
              "books_id": 8,
              "BooksName": "The Inspiration to Mankind",
              "BookLink": "https://drive.google.com/file/d/1sVff9NwulXwPAgUB_h53grL9oeb-nYOT/view?usp=sharing",
              "image": "https://i.ibb.co/g4jhbRC/image.png"
            }
          ]
        },
        {
          "id": 6,
          "Books": [
            {
              "books_id": 1,
              "BooksName": "Yashavant Kanetkar - Let Us",
              "BookLink": "https://drive.google.com/open?id=11j55AdTtL191ufUs-bdYvtsAeXwJO4ws&usp=drive_copy",
              "image": "https://i.ibb.co/sbw04SZ/image.png"
            },
            {
              "books_id": 2,
              "BooksName": "William_Strunk,_E_B_White_The_Elements",
              "BookLink": "https://drive.google.com/open?id=10eP_NALnNgrcuCcyV3yrDUbG7rFmzL2a&usp=drive_copy",
              "image": "https://i.ibb.co/M5Y1Rjq/image.png"
            },
            {
              "books_id": 3,
              "BooksName": "Wilde, Oscar - The Picture of Dorian Gray",
              "BookLink": "https://drive.google.com/open?id=15c7MJOhrLmOL6fjKyQZzJVhQuT6oOPLp&usp=drive_copy",
              "image": "https://i.ibb.co/r7jPTg0/image.png"
            },
            {
              "books_id": 4,
              "BooksName": "Wilde, Oscar - Picture of Dorian Gray",
              "BookLink": "https://drive.google.com/file/d/15d0uw1ndVyxMgGRQubQjqw63F8m-OgQC/view?usp=sharing",
              "image": "https://i.ibb.co/r7jPTg0/image.png"
            },
            {
              "books_id": 5,
              "BooksName": "Vex_King_Good_Vibes,_Good_Life_How_Self_Love_Is_t…",
              "BookLink": "https://drive.google.com/file/d/10XcdvlBhmrcVmHL6ENrCVmyVFhI-yFTR/view?usp=sharing",
              "image": "https://i.ibb.co/sbJbF3s/image.png"
            },
            {
              "books_id": 6,
              "BooksName": "Who_Will_Cry_When_You_Die_Life_Lessons_From_T",
              "BookLink": "https://drive.google.com/open?id=11AasnZaQLMOqVapjaOCR43PhG_qSYW9C&usp=drive_copy",
              "image": "https://i.ibb.co/BN9q9df/image.png"
            },
            {
              "books_id": 7,
              "BooksName": "Secrets_of_Success by Dale Carnegie",
              "BookLink": "https://drive.google.com/file/d/15_80sUrmlOgg-I1TXg-AX9flDZuZL4Id/view?usp=sharing",
              "image": "https://i.ibb.co/fGXjWRJ/image.png"
            }
          ]
        }
        
        
        
        
        
    ] 
    const matchingEntry = idRelatedBooks.find(entry => entry.id == id);
  return (
    <div className="p-5 min-h-screen w-full relative">
      <div className="books-grid">
        <div className="books-Ebooks">
          {matchingEntry &&
            matchingEntry.Books.map((item, index) => (
              <div className='' key={index}>
                <div className="max-w-sm h-[450px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                 <div  className="max-w-sm h-[320px]" >
                 <img
                    loading='lazy'
                    className="w-full h-full object-fill"
                    src={item.image}
                    alt={item.BooksName}
                  />
                 </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {item.BooksName}
                    </h2>
                    {/* Add a check for item.price before rendering */}
                    {item.price && (
                      <p className="text-gray-600 mt-2">Price: {item.price}</p>
                    )}
                    <div className="mt-4">
                      <Link
                        target="_blank"
                        to={`${item.BookLink}`}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full"
                      >
                        Read Book
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default SingleEBooks