Messages = new Mongo.Collection("messages");

if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

  Template.body.helpers({
    messages: function () {
      return Messages.find({}, {sort: {createdAt: -1}});
    },

    twain: [
      {
        room: 1,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11459-br1a_800x566.jpg',
        floor: 1,
        bed: 'Queen',
        baths: 'With #2',
        floorSpace: 'Fair',
        color: 'Purple',
        balconyAccess: 'No',
        side: 'Island',
        baseRate: 1200,
        tax: 150,
        insurance: 102,
        totalRate: "$" + 2232,
        paid: false,
        value: 'V24EC3WGHRMSG'
      },
      {
        room: 2,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11459-br2a_800x566.jpg',
        floor: 1,
        bed: 'King',
        baths: 'With #1',
        floorSpace: 'Good',
        color: 'Green',
        balconyAccess: 'Yes',
        side: 'Island',
        baseRate: 1200,
        tax: 150,
        insurance: 102,
        totalRate: "$" + 2232,
        paid: false,
        value: 'YMKMDJ5S4V4BE'
      },
      {
        room: 3,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11459-br3a_800x566.jpg',
        floor: 1,
        bed: 'King',
        baths: 'Private',
        floorSpace: 'Excellent',
        color: 'Purple',
        balconyAccess: 'Yes',
        side: 'Island',
        baseRate: 1400,
        tax: 175,
        insurance: 119,
        totalRate: "$" + 2474,
        paid: false,
        value: 'JVNWE5NRPBAMC'
      },
      {
        room: 4,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11459-br4a_800x566.jpg',
        floor: 1,
        bed: 'King',
        baths: 'Private',
        floorSpace: 'Excellent',
        color: 'Yellow',
        balconyAccess: 'Yes',
        side: 'Island',
        baseRate: 1400,
        tax: 175,
        insurance: 119,
        totalRate: "$" + 2474,
        paid: false,
        value: '3V9QRWZQS5YSE'
      },
      {
        room: 5,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11459-br5a_800x566.jpg',
        floor: 1,
        bed: 'King',
        baths: 'With #6',
        floorSpace: 'Good',
        color: 'Green',
        balconyAccess: 'Yes',
        side: 'Ocean',
        baseRate: 1200,
        tax: 150,
        insurance: 102,
        totalRate: "$" + 2232,
        paid: false,
        value: 'PXVK5MZCA4RLQ'
      },
      {
        room: 6,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11459-br6a_800x566.jpg',
        floor: 1,
        bed: 'Bunk',
        baths: 'With #5',
        floorSpace: 'Great',
        color: 'Cream',
        balconyAccess: 'No',
        side: 'Ocean',
        baseRate: 1200,
        tax: 150,
        insurance: 102,
        totalRate: "$" + 2232,
        paid: false,
        value: 'RLRCZFYJ299MA'
      },
      {
        room: 7,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11459-br7a_800x566.jpg',
        floor: 1,
        bed: 'Bunk',
        baths: 'With #8',
        floorSpace: 'Great',
        color: 'Blue',
        balconyAccess: 'No',
        side: 'Ocean',
        baseRate: 1200,
        tax: 150,
        insurance: 102,
        totalRate: "$" + 2232,
        paid: false,
        value: 'NHMYNSW7R6TYJ'
      },
      {
        room: 8,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11459-br8a_800x566.jpg',
        floor: 1,
        bed: 'King',
        baths: 'With #7',
        floorSpace: 'Good',
        color: 'Cream',
        balconyAccess: 'Yes',
        side: 'Ocean',
        baseRate: 1200,
        tax: 150,
        insurance: 102,
        totalRate: "$" + 2232,
        paid: false,
        value: 'SJPRE5MQKJAVC'
      },
      {
        room: 9,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11459-br9a_800x566.jpg',
        floor: 1,
        bed: 'King',
        baths: 'Private',
        floorSpace: 'Excellent',
        color: 'Blue',
        balconyAccess: 'Yes',
        side: 'Ocean',
        baseRate: 400,
        tax: 175,
        insurance: 119,
        totalRate: "$" + 2474,
        paid: false,
        value: 'LYWVCPSXHPCGE'
      },
      {
        room: 10,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11459-br10a_800x566.jpg',
        floor: 1,
        bed: 'King',
        baths: 'Private',
        floorSpace: 'Great',
        color: 'Green',
        balconyAccess: 'Yes',
        side: 'Island',
        baseRate: 1400,
        tax: 175,
        insurance: 119,
        totalRate: "$" + 2474,
        paid: false,
        value: '2J8XSU8GB7MGE'
      },
      {
        room: 11,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11459-br11a_800x566.jpg',
        floor: 1,
        bed: 'King',
        baths: 'With #12',
        floorSpace: 'Good',
        color: 'Lt. Purple',
        balconyAccess: 'Yes',
        side: 'Island',
        baseRate: 1200,
        tax: 150,
        insurance: 102,
        totalRate: "$" + 2232,
        paid: false,
        value: 'HGS6PLYK9DX68'
      },
      {
        room: 12,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11459-br12a_800x566.jpg',
        floor: 1,
        bed: 'King',
        baths: 'With #11',
        floorSpace: 'Fair',
        color: 'Mystery',
        balconyAccess: 'No',
        side: 'Island',
        baseRate: 1200,
        tax: 150,
        insurance: 102,
        totalRate: "$" + 2232,
        paid: false,
        value: '5VB3WZP84NW3S'
      },
      {
        room: 13,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11459-br13a_800x566.jpg',
        floor: 3,
        bed: 'Queen',
        baths: 'Private',
        floorSpace: 'Good',
        color: 'Cream',
        balconyAccess: 'No',
        side: 'Island',
        baseRate: 1300,
        tax: 162,
        insurance: 110,
        totalRate: "$" + 2353,
        paid: false,
        value: 'YW7GTF4232K4G'
      },
      {
        room: 14,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11459-br14a_800x566.jpg',
        floor: 3,
        bed: 'King',
        baths: 'Private',
        floorSpace: 'Great',
        color: 'Pink',
        balconyAccess: 'No',
        side: 'South',
        baseRate: 1400,
        tax: 200,
        insurance: 136,
        totalRate: "$" + 2716,
        paid: false,
        value: '3FRCKF4ZCL92S'
      },
      {
        room: 15,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11459-br15a_800x566.jpg',
        floor: 3,
        bed: 'King',
        baths: 'Private',
        floorSpace: 'Excellent',
        color: 'Cream',
        balconyAccess: 'No',
        side: 'Ocean',
        baseRate: 1600,
        tax: 200,
        insurance: 136,
        totalRate: "$" + 2716,
        paid: false,
        value: 'XSLEB3S4EY3LG'
      },
      {
        room: 16,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11459-br16a_800x566.jpg	',
        floor: 3,
        bed: 'Queen',
        baths: 'Private',
        floorSpace: 'Good',
        color: 'Cream',
        balconyAccess: 'No',
        side: 'Island',
        baseRate: 1300,
        tax: 162,
        insurance: 110,
        totalRate: "$" + 2353,
        paid: false,
        value: 'CQPP96G5QUAGC'
      },
      {
        room: 17,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11459-br17a_800x566.jpg',
        floor: 3,
        bed: 'King',
        baths: 'Private',
        floorSpace: 'Great',
        color: 'Yellow',
        balconyAccess: 'Yes',
        side: 'Island',
        baseRate: 1300,
        tax: 162,
        insurance: 110,
        totalRate: "$" + 2474,
        paid: false,
        value: 'ZTLV8SAP448HC'
      },
      {
        room: 18,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11459-br18a_800x566.jpg',
        floor: 3,
        bed: 'King',
        baths: 'Private',
        floorSpace: 'Excellent',
        color: 'White',
        balconyAccess: 'No',
        side: 'Ocean',
        baseRate: 0,
        tax: 0,
        insurance: 0,
        totalRate: ' Reserved',
        reservedBy: 'Lindsay & Michael Lovett',
        paid: true,
        value: 'APZNKFS7K7B78'

      }
    ],
    hemingway: [
      {
        room: 1,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11461-br13_800x566.jpg',
        floor: 1,
        bed: 'King',
        baths: 'Private',
        floorSpace: 'Excellent',
        color: 'Pink',
        balconyAccess: 'No',
        side: 'Island',
        baseRate: 1400,
        tax: 175,
        insurance: 119,
        totalRate: "$" + 2474,
        paid: false,
        value: 'H3UKMFDXLQE8A'
      },
      {
        room: 2,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11461-br8_800x566.jpg',
        floor: 1,
        bed: 'King',
        baths: 'Private',
        floorSpace: 'Excellent',
        color: 'Green',
        balconyAccess: 'Yes',
        side: 'Ocean',
        baseRate: 1400,
        tax: 175,
        insurance: 110,
        totalRate: "$" + 2474,
        paid: false,
        class: 'SULL2J36EHNWU'
      },
      {
        room: 3,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11461-br2_800x566.jpg',
        floor: 1,
        bed: 'Queen',
        baths: 'With #5',
        floorSpace: 'Good',
        color: 'Blue',
        balconyAccess: 'Yes',
        side: 'Island',
        baseRate: 1000,
        tax: 125,
        insurance: 85,
        totalRate: "$" + 1990,
        paid: false,
        value: '2PNAHLSZXVU8W'
      },
      {
        room: 4,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11461-br12_800x566.jpg',
        floor: 1,
        bed: 'King',
        baths: 'Private',
        floorSpace: 'Excellent',
        color: 'Light Purple',
        balconyAccess: 'Yes',
        side: 'Ocean',
        baseRate: 1400,
        tax: 175,
        insurance: 119,
        totalRate: "$" + 2474,
        paid: false,
        value: 'BVYD9HMREPB7W'
      },
      {
        room: 5,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11461-br10_800x566.jpg',
        floor: 1,
        bed: 'Bunk',
        baths: 'With #3',
        floorSpace: 'Good',
        color: 'Green',
        balconyAccess: 'No',
        side: 'Island',
        baseRate: 1000,
        tax: 125,
        insurance: 85,
        totalRate: "$" + 1990,
        paid: false,
        value: 'UK4PA8KLWEFKN'
      },
      {
        room: 6,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11461-br11_800x566.jpg',
        floor: 1,
        bed: 'King',
        baths: 'Private',
        floorSpace: 'Great',
        color: 'Pink',
        balconyAccess: 'Yes',
        side: 'Ocean',
        baseRate: 1200,
        tax: 150,
        insurance: 102,
        totalRate: "$" + 2232,
        paid: false,
        value: 'ET9HCGFDSHPAC'
      },
      {
        room: 7,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11461-br7_800x566.jpg',
        floor: 2,
        bed: 'King',
        baths: 'Private',
        floorSpace: 'Great',
        color: 'Pink',
        balconyAccess: 'No',
        side: 'Island',
        baseRate: 1200,
        tax: 150,
        insurance: 102,
        totalRate: "$" + 2232,
        paid: false,
        value: 'FR6LJR4YZ6SHE'
      },
      {
        room: 8,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11461-br6_800x566.jpg',
        floor: 2,
        bed: 'King',
        baths: 'Private',
        floorSpace: 'Great',
        color: 'Green',
        balconyAccess: 'Yes',
        side: 'Ocean',
        baseRate: 1400,
        tax: 175,
        insurance: 119,
        totalRate: "$" + 2474,
        paid: false,
        value: 'LVEW8ZYA49AS6'
      },
      {
        room: 9,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11461-br5_800x566.jpg',
        floor: 2,
        bed: 'Queen',
        baths: 'Private',
        floorSpace: 'Fair',
        color: 'Pink',
        balconyAccess: 'Yes',
        side: 'Ocean',
        baseRate: 1200,
        tax: 150,
        insurance: 102,
        totalRate: "$" + 2232,
        paid: false,
        value: 'US9DT5K63H8MC'
      },
      {
        room: 10,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11461-br4_800x566.jpg',
        floor: 2,
        bed: 'King',
        baths: 'Private/Tub',
        floorSpace: 'Excellent',
        color: 'Purple',
        balconyAccess: 'Yes',
        side: 'Ocean',
        baseRate: 1400,
        tax: 175,
        insurance: 119,
        totalRate: "$" + 2474,
        paid: false,
        value: 'BZG5HWRHCQGKC'
      },
      {
        room: 11,
        picUrl: 'https://www.twiddy.com/rns/unitimages.twd/r11461-br14_800x449.jpg',
        floor: 3,
        bed: 'Queen',
        baths: 'Private',
        floorSpace: 'Fair',
        color: 'Yellow',
        balconyAccess: 'No',
        side: 'Ocean',
        baseRate: 1200,
        tax: 150,
        insurance: 102,
        totalRate: "$" + 2232,
        paid: false,
        value: '6DWMZXPJVVZYN'
      },
      {
        room: 12,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11461-br3_800x566.jpg',
        floor: 3,
        bed: 'King',
        baths: 'Private',
        floorSpace: 'Good',
        color: 'Purple',
        balconyAccess: 'Private',
        side: 'Ocean',
        baseRate: 1400,
        tax: 175,
        insurance: 119,
        totalRate: "Reserved",
        reservedBy: "Ann Lovett",
        paid: false,
        value: '54BRDAW34CGUA'
      },
      {
        room: 13,
        picUrl: 'https://www.twiddy.com/rns/unitimages.twd/r11461-br9_800x566.jpg',
        floor: 3,
        bed: 'King',
        baths: 'Private',
        floorSpace: 'Good',
        color: 'Blue',
        balconyAccess: 'No',
        side: 'Island',
        baseRate: 1300,
        tax: 162,
        insurance: 110,
        totalRate: "$" + 2353,
        paid: false
      },
      {
        room: 14,
        picUrl: 'http://www.twiddy.com/rns/unitimages.twd/r11461-br1_800x566.jpg',
        floor: 3,
        bed: 'King',
        baths: 'Private',
        floorSpace: 'Excellent+',
        color: 'Purple',
        balconyAccess: 'Private',
        side: 'Ocean',
        baseRate: 1600,
        tax: 200,
        insurance: 136,
        totalRate: "$" + 2716,
        paid: false,
        value: 'MEC3FJHSPXUV2'
      }
    ]
  });
  Template.body.events({

    'click .toggle-chat': function (e) {
     e.preventDefault();
     console.log("chat a burrito.");
     $(".messages").css("display", "block")
     $(".toggle-chat").html("X")
     $(".toggle-chat").addClass("ex-out")
 },
 'click .ex-out': function (e) {
    e.preventDefault();
    console.log("hide a burrito.");
    $(".messages").css("display", "none")
    $(".toggle-chat").html("Chat")
    $(".toggle-chat").removeClass("ex-out")
  },

    "submit .new-message": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var text = event.target.text.value;

      // Insert a Message into the collection
      Messages.insert({
        text: text,
        createdAt: new Date(), // current time
        username: Meteor.user().username,
        owner: Meteor.user().username
      });

      // Clear form
      event.target.text.value = "";
    }
  });

  Template.message.events({
    "click .delete": function () {
      Messages.remove(this._id);
    }
  });
}
