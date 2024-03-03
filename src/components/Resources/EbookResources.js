import React from 'react'
import './ebooks.css'
import drive from './google-drive.png'
import BookBtn from './BookBtn'
import Faq from '../home/Faq'
import Circular from '../circular/Circular'
const EbookResources = () => {
    return (
        <div className='EbookResources_container'>

            <div className='E-book'>
                <div className='e-book-img'>
                    <img src="https://d3vpszern3jgjo.cloudfront.net/wp-content/uploads/2021/02/Ebook-2.jpg" alt="e-bbok" />
                </div>
                <div className='E-book-text'>
                    <h2>What is an E-book?</h2>
                    <p>An electronic book, commonly known as an E-book, is a digital version
                        of a printed book that can be read on various electronic devices.

                    </p> <p> E-books have gained immense popularity due to their accessibility and convenience. Unlike traditional printed books, E-books are typically available in formats
                        such as PDF, ePub, or Kindle, making them compatible with e-readers, tablets, smartphones, and computers.   </p>
                    <p> E-books often include interactive features, search capabilities, and the ability to adjust font size, making them versatile and user-friendly.  </p>
                    <p> The advent of E-books has revolutionized the way people access and consume written content, providing a portable and flexible alternative to physical books.</p>

                    <h1 className='free'>Ekam Innocations Provide a 650+ Free E-books For You </h1>
                    <br />
                    <marquee>

                        <span>Free E-Books</span>
                        <span>Free Audio-Books</span>
                        <span>Free Seminars</span>
                        <span>Free Blogs</span>
                        <span>More Things Are Coming In Future</span>
                    </marquee>
                    <h2>Why Ekam Innocations Provide Free E-Books ?</h2>
                    <p><b>Ekam Innocations</b> is committed to fostering knowledge sharing and accessibility. We believe that information and education should be freely available to everyone,   </p> <p> regardless of financial constraints. By offering free E-books, we aim to democratize access to valuable content, enabling individuals from diverse backgrounds to enhance   </p> <p> their knowledge and skills. Our dedication to promoting learning and innovation drives us to eliminate barriers and empower individuals to explore new ideas.  </p> <p> Providing free E-books aligns with our vision of creating a more inclusive and informed community.</p>
                    <div className='where'>
                        <div className='where-img'>
                            <img src={drive} alt="google-drive" />
                        </div>
                        <div className='where-text'>
                            <h2>Where Can I Find Those Free E-Books?</h2>
                            <p>To access the free E-books provided by <b>Ekam Innocations</b>, you can find them on Ekam's Google Drive. We have organized our collection of E-books on this platform to make them easily accessible to everyone. Visit Ekam's Google Drive to explore a diverse range of educational and informative content available for free. This initiative is part of our commitment to making valuable resources widely available and contributing to the dissemination of knowledge.</p>
                        </div>
                    </div>
                    <BookBtn/>
                </div>
            </div>
            <Circular/>
        <Faq/>
        </div>
    )
}

export default EbookResources