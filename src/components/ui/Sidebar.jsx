import Grid from "@mui/material/Unstable_Grid2";
import {
  Typography,
  Avatar,
  Divider,
  Box,
  Hidden,
  Tab,
  Tabs,
} from "@mui/material/";
import { grey } from "@mui/material/colors";
import {
  HomeRounded,
  FaceRounded,
  TextSnippetRounded,
  TerminalRounded,
  MessageRounded,
  ConnectWithoutContactRounded,
  FavoriteRounded,
  CopyrightRounded,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Grid
      xs={0}
      sm={0}
      md={3}
      lg={2}
      xl={2}
      sx={{ backgroundColor: grey[900] }}
    >
      <Box
        // display={{ sm: "none" }}
        sx={{
          justifyContent: "center",
          textAlign: "center",
          mt: 2,
        }}
      >
        <Hidden mdDown>
          <Avatar
            src={require("../../assets/avatar.jpg")}
            variant="rounded"
            sx={{ height: 200, width: 200, margin: "0 auto" }}
          >
            PH
          </Avatar>
        </Hidden>
        <Typography variant="h6" color="whitesmoke">
          پرهام حیاتی
        </Typography>

        <Typography variant="caption" color="whitesmoke">
          برنامه نویسی و فرانت اند
        </Typography>
        <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />
        <Tabs
          allowScrollButtonsMobile
          orientation="vertical"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab
            // label={
            //   <div>
            //     <Typography variant="subtitle2" color="white">
            //       <HomeRounded sx={{ verticalAlign: "middle", mx: 2 }} />
            //       صفحه اصلی
            //     </Typography>
            //   </div>
            // }
            label="صفحه اصلی"
            icon={<HomeRounded />}
            iconPosition="start"
          />
          <Tab
            // label={
            //   <div>
            //     <Typography variant="subtitle2" color="white">
            //       <FaceRounded sx={{ verticalAlign: "middle", mx: 2 }} />
            //       درباره من
            //     </Typography>
            //   </div>
            // }
            label="درباره من"
            icon={<FaceRounded />}
            iconPosition="start"
          />
          <Tab
            // label={
            //   <div>
            //     <Typography variant="subtitle2" color="white">
            //       <TextSnippetRounded sx={{ verticalAlign: "middle", mx: 2 }} />
            //       رزومه
            //     </Typography>
            //   </div>
            // }
            label="رزومه"
            icon={<TextSnippetRounded />}
            iconPosition="start"
          />
          <Tab
            // label={
            //   <div>
            //     <Typography variant="subtitle2" color="white">
            //       <TerminalRounded sx={{ verticalAlign: "middle", mx: 2 }} />
            //       نموه کارها
            //     </Typography>
            //   </div>
            // }
            label="نموه کارها"
            icon={<TerminalRounded />}
            iconPosition="start"
          />
          <Tab
            // label={
            //   <div>
            //     <Typography variant="subtitle2" color="white">
            //       <MessageRounded sx={{ verticalAlign: "middle", mx: 2 }} />
            //       نظرات
            //     </Typography>
            //   </div>
            // }
            label="نظرات"
            icon={<MessageRounded />}
            iconPosition="start"
          />
          <Tab
            // label={
            //   <div>
            //     <Typography variant="subtitle2" color="white">
            //       <ConnectWithoutContactRounded
            //         sx={{ verticalAlign: "middle", mx: 2 }}
            //       />
            //       ارتباط با ما
            //     </Typography>
            //   </div>
            // }
            label="ارتباط با ما"
            icon={<ConnectWithoutContactRounded />}
            iconPosition="start"
          />
        </Tabs>

        <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "end",
            height: 100,
          }}
        >
          <Typography variant="subtitle2" color="whitesmoke">
            طراحی شده
            <FavoriteRounded
              sx={{ verticallAlign: "middle", color: "tomato", height: 20 }}
            />
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Sidebar;
