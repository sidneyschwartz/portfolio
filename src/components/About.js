import Accordion from 'react-bootstrap/Accordion';

function About() {
  return (
    <div className='About'>
      <h2>What I do</h2>
      <Accordion className='Accordian' flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Software Engineering</Accordion.Header>
          <Accordion.Body>
          At Brown I've been tasked with a multitude 
          of difficult, rewarding projects. To name a few, I built a simplified example storage 
          system in Go for a cryptocurrency modeled after Bitcoin's storage system. 
          I've developed a program in C from scratch that reads & executes user commands 
          and maintains a job control system. I've designed and
          trained Convolutional Neural Networks (CNNs) for scene recognition using Python and
          the TensorFlow system. I've also implemented the ID3 machine learning algorithm in 
          Java to generate a decision tree based on supervised (machine) learning.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Entrepreneurship</Accordion.Header>
          <Accordion.Body>
          In the summer of 2020, I participated in B-Lab, an 8-week summer accelerator 
          for high-impact ventures from Brown University. Our startup was a computer vision technology
          that could be used to detect and reduce waste for restaurants.
          Our approach was two-pronged: (1) to make use of our computer science expertise 
          during the pandemic, learning new skills along the way; and (2) to build something that 
          would have a positive impact on society. 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Problem Solving</Accordion.Header>
          <Accordion.Body>
          During the pandemic, I felt the urge to work on something that would have a positive impact on society. 
          My best friend and I built an iOS application to serve as a platform for talking about and healing from
          mental health issues. I led the front-end development and built the application from scratch using SwiftUI
          and XCode. We eventually deployed our app on TestFlight and ran a beta test with more than 50 users. 
          Our project imported frameworks for Alamofire, Firebase, and CoreData.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>

  );
}

export default About;