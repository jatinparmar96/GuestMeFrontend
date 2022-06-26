
import style from './SpeakerUpdateProfile.module.scss';

const SpeakerUpdateProfile = () => {


  return<>
    <form action="/update/profile">


      <div className={style.topGrid}>
      <div className={style.topLeft}>
          <input type="file" name="profilePicture"/>
          {/* <img /> */}
      </div>
      <div className={style.topRight}>
      <div className={style.twoColumn}>
      <div>
              <label className={style.boldFont}>First name</label>
      <input className={style.blockDisplay} type="text" placeholder='Firstname' name='firstName' />
      </div>
      <div>
              <label className={style.boldFont}>Last name</label>
                <input className={style.blockDisplay} type="text" placeholder='Lastname' name='lastName' />
      </div>
      </div>

          <label className={style.boldFont} >Job Title/Company Name</label>
          <input className={`${style.blockDisplay} ${style.oneColumn}`} type="text" placeholder='Tagline Here' name='tagLine' />

          <div className={style.twoColumn}>
            <div>
              <label className={style.boldFont} >Location</label>
              <input className={style.blockDisplay} type="text" name='location' />
            </div>

      <fieldset>
              <legend className={style.boldFont}>Delivery Method</legend>
      <input type="checkbox" name="isInPerson" />
      <label> In Person</label>
      <input type="checkbox" name="isOnline" />
      <label> Online</label>
            </fieldset>
          </div>

          <div className={style.twoColumn}>
            <div>
              <label className={style.boldFont}>Price per hour</label>
              <input className={style.blockDisplay} type="number" name="price" />
            </div>
      <fieldset>
              <legend className={style.boldFont}>Can Volunteer?</legend>
        <input type="radio" name="yes" />
      <label>Yes</label>
      <input type="radio" name="no" />
        <label>No</label>
        </fieldset>
        </div>
      </div>
      </div>
      <fieldset>
        <legend className={style.boldFont}>Area of expertise</legend>
        <input type="checkbox" name="Law" />
        <label> Law</label>
        <input type="checkbox" name="Finance" />
        <label> Finance</label>
        <input type="checkbox" name="Arts / Design" />
        <label> Arts / Design</label>
        <input type="checkbox" name="Science" />
        <label> Science</label>
        <input type="checkbox" name="Health & Well-being" />
        <label> Health & Well-being</label>
        <input type="checkbox" name="Leadership" />
        <label> Leadership</label>
        <input type="checkbox" name="Education" />
        <label> Education</label>
        <input type="checkbox" name="Technology" />
        <label> Technology</label>
        <input type="checkbox" name="Environment" />
        <label> Environment</label>
        <input type="checkbox" name="Sports" />
        <label> Sports</label>
        <input type="checkbox" name="Business" />
        <label> Business</label>
        <input type="checkbox" name="Others" />
        <label> Others</label>
      </fieldset>
      <fieldset>
        <legend className={style.boldFont}>Language</legend>
        <input type="checkbox" name="English" />
        <label> English</label>
        <input type="checkbox" name="French" />
        <label> French</label>
        <input type="checkbox" name="Spanish" />
        <label> Spanish</label>
        <input type="checkbox" name="Mandarin" />
        <label> Mandarin</label>
        <input type="checkbox" name="Hindi" />
        <label> Hindi</label>
        <input type="checkbox" name="Arabic" />
        <label> Arabic</label>
        <input type="checkbox" name="Portuguese" />
        <label> Portuguese</label>
        <input type="checkbox" name="Russian" />
        <label> Russian</label>
        <input type="checkbox" name="Japanese" />
        <label> Japanese</label>
        <input type="checkbox" name="Others" />
        <label> Others</label>
      </fieldset>
      <label className={`${style.boldFont} ${style.blockDisplay}`}>Skills</label>
      <input type="text" name="skills" />
      <button>Add</button>
      <label className={`${style.boldFont} ${style.blockDisplay}`}>Certifications</label>
      <input className={style.blockDisplay} type="text" name="certifications" />
      <label className={`${style.boldFont} ${style.blockDisplay}`}>Youtube videos</label>
      <input  type="text" name="videos" />
      <button>Add</button>
      <label className={`${style.boldFont} ${style.blockDisplay}`}>About me</label>
      <textarea className={style.blockDisplay} name="about" />

      <div className={style.alignBtn}>
        <button type="submit">Save</button>
      </div>


              </form>
</>



}

export default SpeakerUpdateProfile;