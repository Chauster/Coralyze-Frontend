import React from 'react';
import './MeetTheTeam.scss';
import member1 from '../../images/portraits/saamir.jpg';
import member2 from '../../images/portraits/long.jpg';
import member3 from '../../images/portraits/kishen.png';
import member4 from '../../images/portraits/portrait.png';
import member5 from '../../images/portraits/baolam.jpg';
import member6 from '../../images/portraits/cynan.jpg';
import member7 from '../../images/portraits/armaghan.jpg';
const test = () => {
  return (
    <div>
      <section class="card">
        <div class="card__content">
          <div class="container__card__intro">
            <div class="card__intro">
              <h1>MEET THE TEAM</h1>
            </div>
          </div>

          <div class="card__grid">
            <div class="card__item">
              <div class="card__image">
                <img src={member1}></img>
              </div>
              <div class="card__title">Saamir Hye</div>
              <div class="card__roletitle">Project Manager</div>
              <div class="card__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
                cumque est necessitatibus debitis neque eveniet sequi quas
                consequuntur amet? Deleniti molestias assumenda ab aspernatur!
                Dolorum.
              </div>
            </div>

            <div class="card__item">
              <div class="card__image">
                <div class="card__image">
                  <img src={member2}></img>
                </div>
              </div>
              <div class="card__title">Long Le</div>
              <div class="card__roletitle">Potential Suspect</div>
              <div class="card__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
                cumque est necessitatibus debitis neque eveniet sequi quas
                consequuntur amet? Deleniti molestias assumenda ab aspernatur!
                Dolorum.
              </div>
            </div>

            <div class="card__item">
              <div class="card__image">
                <div class="card__image">
                  <img src={member3}></img>
                </div>
              </div>
              <div class="card__title">Kishen Kumar</div>
              <div class="card__roletitle">
                krokodil user - guacamole brownie expert
              </div>
              <div class="card__description">
                cherry on top here... (blonde hair suited me)
              </div>
            </div>

            <div class="card__item">
              <div class="card__image">
                <div class="card__image">
                  <img src={member4}></img>
                </div>
              </div>
              <div class="card__title">David Chau</div>
              <div class="card__roletitle">Professional Dealer</div>
              <div class="card__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
                cumque est necessitatibus debitis neque eveniet sequi quas
                consequuntur amet? Deleniti molestias assumenda ab aspernatur!
                Dolorum.
              </div>
            </div>

            <div class="card__item">
              <div class="card__image">
                <div class="card__image">
                  <img src={member5}></img>
                </div>
              </div>
              <div class="card__title">Bao Lam Nguyen</div>
              <div class="card__roletitle">Vitmanese #1</div>
              <div class="card__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
                cumque est necessitatibus debitis neque eveniet sequi quas
                consequuntur amet? Deleniti molestias assumenda ab aspernatur!
                Dolorum.
              </div>
            </div>

            <div class="card__item">
              <div class="card__image">
                <div class="card__image">
                  <img src={member6}></img>
                </div>
              </div>
              <div class="card__title">Cynan Du</div>
              <div class="card__roletitle">Vitmanese #2</div>
              <div class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, dignissimos! Distinctio, quidem numquam? Sunt
                perferendis tempora sed dignissimos dolore aspernatur.
              </div>
            </div>

            <div class="card__item">
              <div class="card__image">
                <div class="card__image">
                  <img src={member7}></img>
                </div>
              </div>
              <div class="card__title">Armaghan Zahid</div>
              <div class="card__roletitle">ex smoker pulled out of rehab</div>
              <div class="card__description">
                Nicorette worked like a dream for me, at first i struggled
                really hard to break out of my depression, but smoking really (i
                mean really), helped me get through it all. All in all, i
                believe i have come a long way, and made solid progress in my
                journey towards becoming a better ex- rehab patient.
                <br />- bao the dealer was here
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default test;
