import React, { Component } from 'react';
import '../css/EditorialsComponent.css';
import { intern } from '../shared/source';
class Editorial extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id='header' class='container category-header'>
          <div class='row'>
            <div
              class='col-md-8 tinted cover-image center-fill-container'
              style={{ margin: '70px 0' }}
            >
              <div class='img-container'>
                <img
                  class='center-both img-center-fill tall'
                  src='http://watchout.iitr.ac.in/images/posts/nancy1.jpg'
                  alt=''
                />
              </div>
            </div>

            <div class='col-md-4 cover-details'>
              <div class='cover-title'>
                <a href='/2019/09/summer-diaries-nancy' class='cover-link'>
                  <h1 class='title'>
                    Summer Diaries: Australian National University
                  </h1>
                </a>
              </div>
              <div class='date'>5 September 2019</div>
              <div class='cover-excerpt'>
                I spent these summers with OzGrav group working on experimental
                aspects of Gravitational waves (of which I will talk in detail
                later) at Australian National University, Canberra, for which I
                was supported by Future Research Talent Award.
              </div>
            </div>
          </div>
        </div>

        <div class='col-md-8' style={{ margin: '70px 0' }}>
          <div class='row article article-horiozntal'>
            <div class='col-md-4 center-fill-container img-container'>
              <img
                src='http://watchout.iitr.ac.in/images/posts/hms5.png'
                alt=''
                class='img-center-fill center-both  wide'
              />
            </div>
            <div class='details-container col-md-8'>
              <div class='details'>
                <div class='head'>
                  <h3 class='title'>
                    <a href='/2019/09/summer-diaries-harvardmedical'>
                      Summer Diaries: Harvard Medical School
                    </a>
                  </h3>
                  <div class='tag'>
                    <a href='/category/summer2019/'>Summer 2019</a>
                  </div>
                  <span class='date'>SEP 2, 2019</span>
                </div>
                <div class='excerpt'>
                  <p>
                    Be an exception, not an example that has always been my
                    motivation in life. To begin on that note, I have spent my
                    summer in the Department of Systems Biology, Harvard Medical
                    School affiliated to Harvard University.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class='row article article-horiozntal'>
            <div class='col-md-4 center-fill-container img-container'>
              <img
                src='/images/posts/mohit1.jpeg'
                alt=''
                class='img-center-fill center-both  tall'
              />
            </div>
            <div class='details-container col-md-8'>
              <div class='details'>
                <div class='head'>
                  <h3 class='title'>
                    <a href='/2019/08/summer-diaries-maryland'>
                      Summer Diaries: University of Maryland, College Park
                    </a>
                  </h3>
                  <div class='tag'>
                    <a href='/category/summer2019/'>Summer 2019</a>
                  </div>
                  <span class='date'>AUG 31, 2019</span>
                </div>
                <div class='excerpt'>
                  <p>
                    I am currently doing a research intern at the University of
                    Maryland, College Park. So far it has been 9 weeks since I
                    have started. In this article I’ll try sharing with you my
                    experience so far and how I got here.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class='row article article-horiozntal'>
            <div class='col-md-4 center-fill-container img-container'>
              <img
                src='/images/posts/razor1.png'
                alt=''
                class='img-center-fill center-both  tall'
              />
            </div>
            <div class='details-container col-md-8'>
              <div class='details'>
                <div class='head'>
                  <h3 class='title'>
                    <a href='/2019/08/summer-diaries-razorpay'>
                      Summer Diaries: Razorpay
                    </a>
                  </h3>
                  <div class='tag'>
                    <a href='/category/summer2019/'>Summer 2019</a>
                  </div>
                  <span class='date'>AUG 30, 2019</span>
                </div>
                <div class='excerpt'>
                  <p>
                    This year, I spent my summers interning at Razorpay as a
                    full-stack designer where I spent the majority of my time
                    designing and developing digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Editorial;
