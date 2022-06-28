import { useForm } from 'react-hook-form';
import { post } from '../../Api/api';
import style from './SpeakerUpdateProfile.module.scss';

const SpeakerUpdateProfile = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  console.log(errors);

  return<>
    <form  onSubmit={handleSubmit((data) => {
      // console.log(data)
      post
        (('/speakers/update/profile'), data)
         .then(res => {
           console.log(res);

         });
    })}>


      <div className={style.topGrid}>
      <div className={style.topLeft}>
          <input type="file" name="profilePicture"/>
          {/* <img /> */}
      </div>
      <div className={style.topRight}>
      <div className={style.twoColumn}>
      <div>
              <label className={style.boldFont}>First name</label>
              <input className={style.blockDisplay} type="text" placeholder='Firstname' name='firstName' {...register('firstName', { required:"This is a required field" })} />
      </div>
      <div>
              <label className={style.boldFont}>Last name</label>
              <input className={style.blockDisplay} type="text" placeholder='Lastname' name='lastName' {...register('lastName', { required:"This is a required field" })} />
      </div>
      </div>

          <label className={style.boldFont} >Job Title/Company Name</label>
          <input className={`${style.blockDisplay} ${style.oneColumn}`} type="text" placeholder='Tagline Here' name='tagLine' {...register('tagLine')} />

          <div className={style.twoColumn}>
            <div>
              <label className={style.boldFont} >Location</label>
              <input className={style.blockDisplay} type="text" name='location' {...register('location', { required:"This is a required field" })} />
            </div>

      <fieldset>
              <legend className={style.boldFont}>Delivery Method</legend>
              <input type="checkbox" name="isInPerson" {...register('isInPerson')} />
      <label> In Person</label>
              <input type="checkbox" name="isOnline" {...register('isOnline')} />
      <label> Online</label>
            </fieldset>
          </div>

          <div className={style.twoColumn}>
            <div>
              <label className={style.boldFont}>Price per hour</label>
              <input className={style.blockDisplay} type="number" name="price" {...register('price', { required:"This is a required field" })} />
            </div>
      <fieldset>
              <legend className={style.boldFont}>Can Volunteer?</legend>
              <input type="radio" name="yes" {...register('canVolunteer')} />
      <label>Yes</label>
              <input type="radio" name="no"  {...register('canVolunteer')} />
        <label>No</label>
        </fieldset>
        </div>
      </div>
      </div>
      <fieldset>
        <legend className={style.boldFont}>Area of expertise</legend>
        <input type="checkbox" name="areas" value="Law" {...register('areas')} />
        <label> Law</label>
        <input type="checkbox" name="areas" value="Finance" {...register('areas')} />
        <label> Finance</label>
        <input type="checkbox" name="areas" value="Arts / Design" {...register('areas')} />
        <label> Arts / Design</label>
        <input type="checkbox" name="areas" value="Science" {...register('areas')} />
        <label> Science</label>
        <input type="checkbox" name="areas" value="Health & Well-being" {...register('areas')} />
        <label> Health & Well-being</label>
        <input type="checkbox" name="areas" value="Leadership" {...register('areas')} />
        <label> Leadership</label>
        <input type="checkbox" name="areas" value="Education" {...register('areas')} />
        <label> Education</label>
        <input type="checkbox" name="areas" value="Technology" {...register('areas')} />
        <label> Technology</label>
        <input type="checkbox" name="areas" value="Environment" {...register('areas')} />
        <label> Environment</label>
        <input type="checkbox" name="areas" value="Sports" {...register('areas')} />
        <label> Sports</label>
        <input type="checkbox" name="areas" value="Business" {...register('areas')} />
        <label> Business</label>
        <input type="checkbox" name="areas" value="Others" {...register('areas')} />
        <label> Others</label>
      </fieldset>
      <fieldset>
        <legend className={style.boldFont}>Language</legend>
        <input type="checkbox" name = "language" value="English" {...register('language')} />
        <label> English</label>
        <input type="checkbox" name = "language" value="French" {...register('language')} />
        <label> French</label>
        <input type="checkbox" name = "language" value="Spanish" {...register('language')} />
        <label> Spanish</label>
        <input type="checkbox" name = "language" value="Mandarin" {...register('language')} />
        <label> Mandarin</label>
        <input type="checkbox" name = "language" value="Hindi" {...register('language')} />
        <label> Hindi</label>
        <input type="checkbox" name = "language" value="Arabic" {...register('language')} />
        <label> Arabic</label>
        <input type="checkbox" name = "language" value="Portuguese" {...register('language')} />
        <label> Portuguese</label>
        <input type="checkbox" name = "language" value="Russian" {...register('language')} />
        <label> Russian</label>
        <input type="checkbox" name = "language" value="Japanese" {...register('language')} />
        <label> Japanese</label>
        <input type="checkbox" name = "language" value="Others" {...register('language')} />
        <label> Others</label>
      </fieldset>
      <label className={`${style.boldFont} ${style.blockDisplay}`}>Skills</label>
      <input type="text" name="skills"  {...register('skills', { required:"This is a required field" })} />


      <button>Add</button>
      <label className={`${style.boldFont} ${style.blockDisplay}`}>Certifications</label>
      <input className={style.blockDisplay} type="text" name="certifications" />
      <label className={`${style.boldFont} ${style.blockDisplay}`}>Youtube videos</label>
      <input type="text" name="videos" {...register('videos')} />

      <label className={`${style.boldFont} ${style.blockDisplay}`}>About me</label>
      <textarea className={style.blockDisplay} name="about" {...register('about', { required:"This is a required field" })} />

      <div className={style.alignBtn}>
        <button type="submit">Save</button>
      </div>


              </form>
</>



}

export default SpeakerUpdateProfile;