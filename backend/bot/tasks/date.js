const formatDate = () => {
     const date = new Date();
     const second = date.getSeconds();
     const minute = date.getMinutes();
     const hour = date.getHours();
     const day = date.getDate();
     const month = date.getMonth();
     const year = date.getFullYear();
     return `${hour}:${minute}:${second} ${day}/${month}/${year}`;
}

module.exports = formatDate;