

function updateProfileInfo(profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
    
    const university = document.getElementById('profile.university')
    university.innerText = profileData.university

}

function updateAboutMe(profileData){
        const aboutMe = document.getElementById('profile.aboutMe')
        aboutMe.innerHTML = profileData.aboutMe.map(aboutMe => `<p>${aboutMe}</p>`).join('')
    }

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData){
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updateProjetos(profileData){
    const projetos = document.getElementById('profile.projetos')
    projetos.innerHTML = profileData.projetos.map(projetos => {
        return `
            <li> 
                 <span class="title github"><a href="${projetos.url}" target="_blank">${projetos.name}</a></span>
            </li>`
    }).join('')
}

function updateProfessionalExperience(profileData){
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `<li>
            <h3 class="title" >${experience.name}</h3>
            <p class="period">${experience.period}</p>
            <p>${experience.description}</p>
        </li>`
    }).join()
}

function updateCertificados(profileData){
    const certificados = document.getElementById('profile.certificados')
    certificados.innerHTML = profileData.certificados.map(certificados => {
        return `
            <li> 
                 <span class="title medal"><a href="${certificados.url}" target="_blank">${certificados.name}</a></span>
            </li>`
    }).join('')
}



(async () => {

    const profileData = await fecthProfileData()
    updateAboutMe(profileData)
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updateProjetos(profileData) 
    updateProfessionalExperience(profileData)
    updateCertificados(profileData)
})()