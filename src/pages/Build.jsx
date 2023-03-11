import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
function Build() {
  return (
<ScrollContainer className='buildmain'>
  <ScrollPage>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span style={{ fontSize: "30px" }}>Welcome to the build process</span>
    </Animator>
  </ScrollPage>
 

  <ScrollPage>
    <Animator animation={FadeUp}>
    <div className="card border-dark mb-3" style={{maxWidth: "30rem"}}>
    <img class="card-img-bottom" src="images/disckb.jpg" alt="Card image cap"/>
  <div class="card-body text-dark">
    <h5 class="card-title">Step 1</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus erat non justo finibus, non finibus magna commodo. Maecenas quam turpis, sagittis vitae eros viverra, dapibus mollis justo. Sed massa sem, efficitur non neque porta, volutpat convallis lectus. Proin placerat ante purus, eget sodales arcu rutrum ut. Suspendisse vulputate eget purus vel pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam velit est, laoreet a semper vel, vehicula at elit. Etiam eget arcu in sapien accumsan elementum quis sit amet lacus. Vestibulum et luctus mauris. Ut accumsan erat eu felis condimentum consectetur. </p>
  </div>
</div>
    </Animator>
  </ScrollPage>
 
  
  <ScrollPage>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span style={{ fontSize: "40px" }}>
        <Animator animation={MoveOut(1000, 0)}>
        <div className="card border-dark mb-3" style={{maxWidth: "30rem"}}>
    <img class="card-img-bottom" src="images/disckb.jpg" alt="Card image cap"/>
  <div class="card-body text-dark">
    <h5 class="card-title">Step 2</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus erat non justo finibus, non finibus magna commodo. Maecenas quam turpis, sagittis vitae eros viverra, dapibus mollis justo. Sed massa sem, efficitur non neque porta, volutpat convallis lectus. Proin placerat ante purus, eget sodales arcu rutrum ut. Suspendisse vulputate eget purus vel pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam velit est, laoreet a semper vel, vehicula at elit. Etiam eget arcu in sapien accumsan elementum quis sit amet lacus. Vestibulum et luctus mauris. Ut accumsan erat eu felis condimentum consectetur. </p>
  </div>
</div>

        </Animator>
        
      </span>
    </div>
  </ScrollPage>
 <ScrollPage>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span style={{ fontSize: "40px" }}>
      <Animator animation={MoveIn(1000, 0)}> 
        <div className="card border-dark mb-3" style={{maxWidth: "30rem"}}>
    <img class="card-img-bottom" src="images/disckb.jpg" alt="Card image cap"/>
  <div class="card-body text-dark">
    <h5 class="card-title">Step 3</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus erat non justo finibus, non finibus magna commodo. Maecenas quam turpis, sagittis vitae eros viverra, dapibus mollis justo. Sed massa sem, efficitur non neque porta, volutpat convallis lectus. Proin placerat ante purus, eget sodales arcu rutrum ut. Suspendisse vulputate eget purus vel pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam velit est, laoreet a semper vel, vehicula at elit. Etiam eget arcu in sapien accumsan elementum quis sit amet lacus. Vestibulum et luctus mauris. Ut accumsan erat eu felis condimentum consectetur. </p>
  </div>
</div>
        </Animator>
        
      </span>
    </div>
  </ScrollPage>
  
  <ScrollPage>
    <Animator animation={FadeUp}>
    <div className="card border-dark mb-3" style={{maxWidth: "30rem"}}>
    <img class="card-img-bottom" src="images/disckb.jpg" alt="Card image cap"/>
  <div class="card-body text-dark">
    <h5 class="card-title">Step 4</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus erat non justo finibus, non finibus magna commodo. Maecenas quam turpis, sagittis vitae eros viverra, dapibus mollis justo. Sed massa sem, efficitur non neque porta, volutpat convallis lectus. Proin placerat ante purus, eget sodales arcu rutrum ut. Suspendisse vulputate eget purus vel pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam velit est, laoreet a semper vel, vehicula at elit. Etiam eget arcu in sapien accumsan elementum quis sit amet lacus. Vestibulum et luctus mauris. Ut accumsan erat eu felis condimentum consectetur. </p>
  </div>
</div>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span style={{ fontSize: "40px" }}>
        <Animator animation={MoveOut(1000, 0)}>
        <div className="card border-dark mb-3" style={{maxWidth: "30rem"}}>
    <img class="card-img-bottom" src="images/disckb.jpg" alt="Card image cap"/>
  <div class="card-body text-dark">
    <h5 class="card-title">Step 5</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus erat non justo finibus, non finibus magna commodo. Maecenas quam turpis, sagittis vitae eros viverra, dapibus mollis justo. Sed massa sem, efficitur non neque porta, volutpat convallis lectus. Proin placerat ante purus, eget sodales arcu rutrum ut. Suspendisse vulputate eget purus vel pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam velit est, laoreet a semper vel, vehicula at elit. Etiam eget arcu in sapien accumsan elementum quis sit amet lacus. Vestibulum et luctus mauris. Ut accumsan erat eu felis condimentum consectetur. </p>
  </div>
</div>

        </Animator>
        
      </span>
    </div>
  </ScrollPage>
 <ScrollPage>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span style={{ fontSize: "40px" }}>
      <Animator animation={MoveIn(1000, 0)}> 
        <div className="card border-dark mb-3" style={{maxWidth: "30rem"}}>
    <img class="card-img-bottom" src="images/disckb.jpg" alt="Card image cap"/>
  <div class="card-body text-dark">
    <h5 class="card-title">Step 6</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus erat non justo finibus, non finibus magna commodo. Maecenas quam turpis, sagittis vitae eros viverra, dapibus mollis justo. Sed massa sem, efficitur non neque porta, volutpat convallis lectus. Proin placerat ante purus, eget sodales arcu rutrum ut. Suspendisse vulputate eget purus vel pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam velit est, laoreet a semper vel, vehicula at elit. Etiam eget arcu in sapien accumsan elementum quis sit amet lacus. Vestibulum et luctus mauris. Ut accumsan erat eu felis condimentum consectetur. </p>
  </div>
</div>
        </Animator>
        
      </span>
    </div>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={FadeUp}>
    <div className="card border-dark mb-3" style={{maxWidth: "30rem"}}>
    <img class="card-img-bottom" src="images/disckb.jpg" alt="Card image cap"/>
  <div class="card-body text-dark">
    <h5 class="card-title">Step 7</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus erat non justo finibus, non finibus magna commodo. Maecenas quam turpis, sagittis vitae eros viverra, dapibus mollis justo. Sed massa sem, efficitur non neque porta, volutpat convallis lectus. Proin placerat ante purus, eget sodales arcu rutrum ut. Suspendisse vulputate eget purus vel pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam velit est, laoreet a semper vel, vehicula at elit. Etiam eget arcu in sapien accumsan elementum quis sit amet lacus. Vestibulum et luctus mauris. Ut accumsan erat eu felis condimentum consectetur. </p>
  </div>
</div>
    </Animator>
  </ScrollPage>
  <ScrollPage></ScrollPage>
 
</ScrollContainer>

     )
}

export default Build