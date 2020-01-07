import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';
import Layout from '../global/Layout';
import Image from '../components/Image';
import Credentials from '../components/Credentials';
import Alumni from '../components/Alumni';
import TestCom from '../components/testCom';
import Test from '../components/Test';
import Mentors from '../components/Mentors';
import WhoIsHiring from '../components/WhoIsHiring'
import Footer from '../components/Footer'
import {Spring} from '../components/spring'
import ReactPlayer from 'react-player'
import Icon from '../components/Icon'
import PricesAndPayment from '../components/PricesAndPayment';
import QueryTest from '../components/QueryTest';
import Why4Geeks from '../components/Why4Geeks';
import Locations from '../components/Locations';
import Jobs from '../components/Jobs';
import '../assets/css/style.scss'
import Link from 'gatsby-link'
<<<<<<< HEAD
import {H1, H2, H5, Title, Separator, Paragraph} from '../components/Heading'
import {Container, Row, Column, Divider} from '../components/Sections'
import {RoundImage, Colors} from '../components/Styling'
=======
import {H1, H2, Title, Separator, Paragraph} from '../components/Heading'
import {Container} from '../components/Sections'
>>>>>>> e83afba14acaf91624362aa4de2103f6e6ad1b7c
import {ThumbsUpIcon, ArrowRightIcon} from 'react-line-awesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserFriends, faGlasses, faClock, faChalkboardTeacher, faCommentAlt} from '@fortawesome/free-solid-svg-icons'
const Home = ({data}) => {
  console.log(data.partners.edges[0].node.partners[0].image)
  return (

<<<<<<< HEAD
    <Layout>
      <Container fluid height="480px">
        <Row>
          <Column size="1" />
          <Column size="11" >
            <Row>
              <Column size="1" />
              <Column size="5">
                <Divider height="100px" />
                <Row>
                  <H1>Miami Coding Bootcamp</H1>
                </Row>
                <Row>
                  <Separator primary />
                </Row>
                <Row>
                  <H2 primary align="left" fontSize="50px">LEARN TO CODE AND GET CAREER SUPPORT FOR LIFE</H2>
                </Row>
                <Row>
                  <Paragraph color={Colors.gray} margin="10px 0px" align="left">Join more than 500 graduates already working as coders and become a part of one of the world's biggest coding community.</Paragraph>
                </Row>
                <Row center>
                  <Link to="/program">
                    <div className="btn text-white btn-md rounded-pill jumbo-button" role="button">CHOOSE YOUR PROGRAM </div>
                  </Link>
                </Row>
              </Column>
              <Column size="1" />
              <Column size="5" border bottom padding="20%" image url="https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80" height="600px" ></Column>
            </Row>
          </Column>
        </Row>
      </Container>
      <Container fluid >
        <Row>
          <Column size="1" />
          <Column size="11">
            <Row>
              <Column size="1" />
              <Column size="8">
                <QueryTest />
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
      <Container fluid >
        <Row>
          <Column size="1" />
          <Column size="11">
            <Row>
              <Column size="1" />
              <Column size="8">
                <Divider height="100px" />
                <Why4Geeks />
                <Divider height="100px" />
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
=======
const Heading = styled.h1`
  font-size: 24px;
  color: #555;
  margin-top: 60px;
`;

const Label = styled.p`
  font-size: 14px;
  color: #aaa;
  margin-top: 12px;
  letter-spacing: 10px;
  text-transform: uppercase;
`;
const friend = <FontAwesomeIcon icon={faUserFriends} size="2x" />
const glasses = <FontAwesomeIcon icon={faGlasses} size="2x" />
const clock = <FontAwesomeIcon icon={faClock} size="2x" />
const teacher = <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" />
const comment = <FontAwesomeIcon icon={faCommentAlt} size="2x" />
const Home = ({data}) => {
  console.log(data.partners.edges[0].node.partners[0].image)
  return (

    <Layout>
      <div className="jumbotron bg-white jumbo-container">
        <div class="container">
          <div className="row">
            <div className="col-md-6 px-0">
              <div className="row jumbo-lead px-5">
                <H1>Miami Coding Bootcamp</H1>
              </div>
              <div className="row px-5">
                <Separator primary />
              </div>
              <div className="row px-5">
                <H2 primary>LEARN TO CODE AND GET CAREER SUPPORT FOR LIFE</H2>
              </div>
              <div className="row px-5">
                <Paragraph primary>Join more than 500 graduates already working as coders and become a part of one of the world's biggest coding community.</Paragraph>
              </div>
              <div className="row px-5 mt-3">
                <Link to="/program">
                  <div className="btn text-white btn-md rounded-pill jumbo-button" role="button">CHOOSE YOUR PROGRAM </div>
                </Link>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 img-top">
              <img src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80" width="100%" height="500px%" />
            </div>
          </div>
        </div>
      </div>
      <QueryTest />
      <Why4Geeks />
      <Jobs />
      {/* WHAT MAKES PROGRAM STAND OUT? */}
      <Container
        primary
        height="300px"
        marginLeft="60px"
        borderTopLeft="1.25rem"
      />
      <Container primary test="10px">
        <Title
          title="WHAT MAKES THIS PROGRAM STAND OUT?"
          style=""
          paragraph="View full comparison table >"
        />
        <div className="row program-features justify-content-center mt-5">
          <div className="col-md-8 program-stand">
            <div className="row program-stand-row-header">
              <div className="col-md-6 program-stand-features-header pt-4 pl-5">
                FEATURES
            </div>
              <div className="col-md-6 program-stand-features-header-right pt-4 pl-5">
                <div className="row">
                  <div className="col-md-6">AT 4GEEKS</div>
                  <div className="col-md-6"> INDUSTRY AVERAGE</div>
                </div>
              </div>
            </div>
            <div className="row program-stand-row-body">
              <div className="col-md-6 program-stand-features-body  pt-3">
                <div className="row ">
                  <div className="col-md-3 program-icon">{teacher}</div>
                  <div className="col-md-9 text-white program-body-title">ONE TEACHER EVERY FIVE</div>
                </div>
                <div className="row ">
                  <div className="col-md-3 "><Icon icon="trash" /></div>
                  <div className="col-md-9 text-white program-body-title">SENIOR TEACHERS PER STUDENT</div>
                </div>
                <div className="row">
                  <div className="col-md-3 program-icon">{clock}</div>
                  <div className="col-md-9 text-white program-body-title">AVERAGE TIME TO GET HELP</div>
                </div>
                <div className="row">
                  <div className="col-md-3 program-icon">{friend}</div>
                  <div className="col-md-9 text-white program-body-title">ONE-ON-ONE MENTORING</div>
                </div>
                <div className="row">
                  <div className="col-md-3 program-icon">{comment}</div>
                  <div className="col-md-9 text-white program-body-title">INTERVIEW PREPARATION</div>
                </div>
              </div>
              <div className="col-md-6 program-stand-features-body-right pt-3 ">
                <div className="row">
                  <div className="col-md-6">1:5</div>
                  <div className="col-md-6">1:7</div>
                </div>
                <div className="row">
                  <div className="col-md-6">1:10</div>
                  <div className="col-md-6">1:30</div>
                </div>
                <div className="row">
                  <div className="col-md-6">15 MIN</div>
                  <div className="col-md-6">NOT MEASURED</div>
                </div>
                <div className="row">
                  <div className="col-md-6">UNLIMITED</div>
                  <div className="col-md-6">LIMITED</div>
                </div>
                <div className="row">
                  <div className="col-md-6">TARGETED</div>
                  <div className="col-md-6">GENERAL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="col-md-6 offset-md-3 program-lead text-white text-center my-5">
            <div className="btn text-white btn-md rounded-pill  btn-outline-light button-program">COMPARE 4GEEKS WITH OTHER SCHOOLS</div>
          </div>
        </div>

        <Title
          title="JOIN 4GEEKS"
          style="d"
          paragraph="Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum."
        />
        <img src={data.partners.edges[0].node.partners[0].image} />
        <div className="row">
          <div class="col-md-4 offset-md-2 program-box bg-white p-4 mr-3">
            <div className="row box-title">GEEK<span>PAL</span></div>
            <div className="row box-lead">Programming - Always - Limitless</div>
            <div className="row box-content mt-2">
              <div className="col-md-6 p-0">Never code on your own again. We will be with lalong side your journey and for as long as you want us to be.</div>
              <div className="col-md-6 text-right"><ArrowRightIcon className="custom-icon" /></div>
            </div>
          </div>
          <div class="col-md-4 program-box bg-white p-4">
            <div className="row box-title">GEEK<span>FORCE</span></div>
            <div className="row box-lead">FOR Career Empowerment</div>
            <div className="row box-content mt-2">
              <div className="col-md-6 p-0">We'll do everything in our hands to help you get a jobin the field. Includes Career Support Track. GeekPAL and GeekTALK.</div>
              <div className="col-md-6 text-right"><ArrowRightIcon className="custom-icon" /></div>
            </div>
          </div>
        </div>

      </Container>
      {/* kkk */}
      {/* WHAT MAKES PROGRAM STAND OUT?  END SECTION*/}
      <WhoIsHiring />
      <Alumni />
      <Section height="200px" />
      <Locations />
      <Section height="100px" />
      <Footer />
>>>>>>> e83afba14acaf91624362aa4de2103f6e6ad1b7c
    </Layout>
  )
};
export const myQuer = graphql`
query myQueryy{
  alumni:   allAlumniYaml{
    edges{
      node{
        name
        image
        content
        title
      }
    }
  }
  partners: allPartnersYaml{
    edges{
      node{
        partners{
          name
          image
        }
      }
    }
  }
  mentors: allTeachersYaml{
    edges{
      node{
        name
        image
        last_name
        nick_name
        coding_skills
      }
    }
  }
}
`
export default Home;