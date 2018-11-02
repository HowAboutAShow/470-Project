# Explore our Codebase
Website: http://howaboutashow.s3-website.us-east-2.amazonaws.com

# Running our Codebase
We have provide here all the code to be deployed to AWS.
- Lamda1Port.zip is what needs to uplaoded as a lamda function, it is packaged with all its dependencies.
- title.ratings.tsv is a data file from imdb that we leverage
- All other files construct the front facing webpage the user enters data into, which triggers the lambda and returns the result to the webpage


# 470-Project
Proposal: https://docs.google.com/document/d/1DpoKo4IZ652F7GoejGv1ldHsfoChiocLEdMoHh7HdG0/
Checkpoint 1: https://docs.google.com/document/d/1K77C_ojUZjmNEXQJcHHgl36AK-M21PIltvleOl5lIKM/edit

## Front-End Tasks
 - [x] Create front-end template
 - [ ] Provide fields for rating 1-10
 - - [x] Comedy
 - - [x] Drama
 - - [x] Action
 - - [x] Sci-fi
 - - [ ] Horror
 - - [ ] Other?
 - [ ] Implement functionality of the submit button
 - [ ] onClick function that:
 -  - [ ] Computes total score for given reviews (Ignore N/A values)
 -  - [ ] Computes score for given user preference for shows in our database
 -  - [ ] Compares these scores; return top __ shows
 -  [ ] Redirect to results page
- [ ] Deploy!
